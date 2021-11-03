<?php

namespace App\Controller\Admin;

use App\Controller\DefaultController;
use App\Entity\Invoice;
use App\Entity\InvoiceLine;
use App\Enum\StudentPaymentEnum;
use App\Form\Model\GenerateInvoiceModel;
use App\Form\Type\GenerateInvoiceType;
use App\Form\Type\GenerateInvoiceYearMonthChooserType;
use App\Manager\GenerateInvoiceFormManager;
use App\Pdf\InvoiceBuilderPdf;
use App\Service\NotificationService;
use App\Service\XmlSepaBuilderService;
use DateTime;
use DateTimeImmutable;
use Exception;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as Controller;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Contracts\Translation\TranslatorInterface;

final class InvoiceAdminController extends BaseAdminController
{
    public function generateAction(Request $request): Response
    {
        /** @var GenerateInvoiceFormManager $gifm */
        $gifm = $this->container->get('app.generate_invoice_form_manager');
        // year & month chooser form
        $generateInvoiceYearMonthChooser = new GenerateInvoiceModel();
        /** @var Controller $this */
        $yearMonthForm = $this->createForm(GenerateInvoiceYearMonthChooserType::class, $generateInvoiceYearMonthChooser);
        $yearMonthForm->handleRequest($request);
        // build items form
        $generateInvoice = new GenerateInvoiceModel();
        /** @var Controller $this */
        $form = $this->createForm(GenerateInvoiceType::class, $generateInvoice);
        $form->handleRequest($request);
        if ($yearMonthForm->isSubmitted() && $yearMonthForm->isValid()) {
            $year = $generateInvoiceYearMonthChooser->getYear();
            $month = $generateInvoiceYearMonthChooser->getMonth();
            // fill full items form
            $generateInvoice = $gifm->buildFullModelForm($year, $month);
            /** @var Controller $this */
            $form = $this->createForm(GenerateInvoiceType::class, $generateInvoice);
        }

        return $this->renderWithExtraParams(
            'Admin/Invoice/generate_invoice_form.html.twig',
            array(
                'action' => 'generate',
                'year_month_form' => $yearMonthForm->createView(),
                'form' => $form->createView(),
                'generate_invoice' => $generateInvoice,
            )
        );
    }

    public function creatorAction(Request $request): RedirectResponse
    {
        /** @var TranslatorInterface $translator */
        $translator = $this->container->get('translator');
        /** @var GenerateInvoiceFormManager $gifm */
        $gifm = $this->container->get('app.generate_invoice_form_manager');
        $generateInvoice = $gifm->transformRequestArrayToModel($request->get('generate_invoice'));
        $recordsParsed = $gifm->persistFullModelForm($generateInvoice);
        if (0 === $recordsParsed) {
            $this->addFlash('warning', $translator->trans('backend.admin.invoice.generator.no_records_presisted'));
        } else {
            $this->addFlash('success', $translator->trans('backend.admin.invoice.generator.flash_success', array('%amount%' => $recordsParsed), 'messages'));
        }

        return $this->redirectToList();
    }

    /**
     * @throws Exception
     */
    public function pdfAction(): Response
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var Invoice $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        /** @var InvoiceBuilderPdf $ips */
        $ips = $this->container->get('app.invoice_pdf_builder');
        $pdf = $ips->build($object);

        return new Response($pdf->Output('pas_a_repas_invoice_'.$object->getSluggedInvoiceNumber().'.pdf', 'I'), 200, ['Content-type' => 'application/pdf']);
    }

    /**
     * Send PDF invoice action.
     *
     * @throws Exception
     */
    public function sendAction(): RedirectResponse
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var Invoice $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        $object
            ->setIsSended(true)
            ->setSendDate(new DateTimeImmutable())
        ;
        $em = $this->getDoctrine()->getManager();
        $em->flush();
        /** @var InvoiceBuilderPdf $ips */
        $ips = $this->container->get('app.invoice_pdf_builder');
        $pdf = $ips->build($object);
        /** @var NotificationService $messenger */
        $messenger = $this->container->get('app.notification');
        $result = $messenger->sendInvoicePdfNotification($object, $pdf);
        if (0 === $result) {
            /* @var Controller $this */
            $this->addFlash('danger', 'S\'ha produït un error durant l\'enviament de la factura núm. '.$object->getInvoiceNumber().'. La persona '.$object->getMainEmailName().' no ha rebut cap missatge a la seva bústia.');
        } else {
            /* @var Controller $this */
            $this->addFlash('success', 'S\'ha enviat la factura núm. '.$object->getInvoiceNumber().' amb PDF a la bústia '.$object->getMainEmail());
        }

        return $this->redirectToList();
    }

    /**
     * Generate SEPA direct debit XML action.
     */
    public function generateDirectDebitAction()
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var Invoice $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        /** @var XmlSepaBuilderService $xsbs */
        $xsbs = $this->container->get('app.xml_sepa_builder');
        $paymentUniqueId = uniqid('', true);
        $xml = $xsbs->buildDirectDebitSingleInvoiceXml($paymentUniqueId, new DateTime('now + 3 days'), $object);
        $object
            ->setIsSepaXmlGenerated(true)
            ->setSepaXmlGeneratedDate(new DateTimeImmutable())
        ;
        $em = $this->getDoctrine()->getManager();
        $em->flush();
        if (DefaultController::ENV_DEV === $this->getParameter('kernel.environment')) {
            return new Response($xml, 200, ['Content-type' => 'application/xml']);
        }
        $now = new DateTimeImmutable();
        $fileSystem = new Filesystem();
        $fileNamePath = sys_get_temp_dir().DIRECTORY_SEPARATOR.'SEPA_invoice_'.$now->format('Y-m-d_H-i').'.xml';
        $fileSystem->touch($fileNamePath);
        $fileSystem->dumpFile($fileNamePath, $xml);
        $response = new BinaryFileResponse($fileNamePath, 200, ['Content-type' => 'application/xml']);
        $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

        return $response;
    }

    public function duplicateAction(): RedirectResponse
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var Invoice $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        // new invoice
        $today = new DateTimeImmutable();
        $newInvoice = new Invoice();
        $newInvoice
            ->setDate($today)
            ->setStudent($object->getStudent())
            ->setPerson($object->getPerson())
            ->setBaseAmount($object->getBaseAmount())
            ->setTotalAmount($object->getTotalAmount())
            ->setDiscountApplied($object->isDiscountApplied())
            ->setMonth((int) $today->format('m'))
            ->setYear((int) $today->format('Y'))
            ->setIsForPrivateLessons($object->getIsForPrivateLessons())
            ->setTaxPercentage($object->getTaxPercentage())
            ->setIrpfPercentage($object->getIrpfPercentage())
            ->setIsPayed(false)
        ;
        $em = $this->getDoctrine()->getManager();
        $em->persist($newInvoice);
        $em->flush();
        /** @var InvoiceLine $line */
        foreach ($object->getLines() as $line) {
            $newInvoiceLine = new InvoiceLine();
            $newInvoiceLine
                ->setInvoice($newInvoice)
                ->setDescription($line->getDescription())
                ->setUnits($line->getUnits())
                ->setPriceUnit($line->getPriceUnit())
                ->setDiscount($line->getDiscount())
                ->setTotal($line->getTotal())
            ;
            $em->persist($newInvoiceLine);
        }
        $em->flush();

        $this->addFlash('success', 'S\'ha duplicat la factura núm. '.$object->getId().' amb la factura núm. '.$newInvoice->getId().' correctament.');

        return $this->redirectToList();
    }

    public function batchActionGeneratesepaxmls(ProxyQueryInterface $selectedModelQuery)
    {
        $this->admin->checkAccess('edit');
        $em = $this->getDoctrine()->getManager();
        $selectedModels = $selectedModelQuery->execute();
        try {
            /** @var XmlSepaBuilderService $xsbs */
            $xsbs = $this->container->get('app.xml_sepa_builder');
            $paymentUniqueId = uniqid('', true);
            $xmls = $xsbs->buildDirectDebitInvoicesXml($paymentUniqueId, new DateTime('now + 3 days'), $selectedModels);
            /** @var Invoice $selectedModel */
            foreach ($selectedModels as $selectedModel) {
                if (StudentPaymentEnum::BANK_ACCOUNT_NUMBER === $selectedModel->getMainSubject()->getPayment() && !$selectedModel->getStudent()->getIsPaymentExempt()) {
                    $selectedModel
                        ->setIsSepaXmlGenerated(true)
                        ->setSepaXmlGeneratedDate(new \DateTime())
                    ;
                }
            }
            $em->flush();
            if (DefaultController::ENV_DEV === $this->getParameter('kernel.environment')) {
                return new Response($xmls, 200, ['Content-type' => 'application/xml']);
            }
            $now = new DateTimeImmutable();
            $fileSystem = new Filesystem();
            $fileNamePath = sys_get_temp_dir().DIRECTORY_SEPARATOR.'SEPA_invoices_'.$now->format('Y-m-d_H-i').'.xml';
            $fileSystem->touch($fileNamePath);
            $fileSystem->dumpFile($fileNamePath, $xmls);

            $response = new BinaryFileResponse($fileNamePath, 200, ['Content-type' => 'application/xml']);
            $response->setContentDisposition(ResponseHeaderBag::DISPOSITION_ATTACHMENT);

            return $response;
        } catch (Exception $e) {
            $this->addFlash('error', 'S\'ha produït un error al generar l\'arxiu SEPA amb format XML. Revisa les factures seleccionades.');
            $this->addFlash('error', $e->getMessage());

            return new RedirectResponse(
                $this->admin->generateUrl('list', [
                    'filter' => $this->admin->getFilterParameters(),
                ])
            );
        }
    }
}
