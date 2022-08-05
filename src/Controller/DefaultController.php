<?php

namespace App\Controller;

use App\Entity\ContactMessage;
use App\Entity\Invoice;
use App\Entity\NewsletterContact;
use App\Entity\PreRegister;
use App\Enum\PreRegisterSeasonEnum;
use App\Form\Type\ContactMessageType;
use App\Form\Type\PreRegisterType;
use App\Service\NotificationService;
use Doctrine\ORM\EntityManagerInterface;
use Ivory\GoogleMap\Base\Coordinate;
use Ivory\GoogleMap\Map;
use Ivory\GoogleMap\Overlay\Marker;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    public const ENV_DEV = 'dev';
    public const ENV_PROD = 'prod';

    /**
     * @Route("/", name="app_homepage")
     */
    public function indexAction(Request $request, NotificationService $messenger): Response
    {
        $map = new Map();
        $map->setCenter(new Coordinate(40.7061278, 0.5817055555555556));
        $map->setAutoZoom(false);
        $map->setMapOption('zoom', 17);
        $marker = new Marker(new Coordinate(40.7061278, 0.5817055555555556));
        $map->getOverlayManager()->addMarker($marker);
        $map->setStylesheetOption('width', '100%');
        $map->setStylesheetOption('height', '400px');

        $contactEntity = new ContactMessage();
        $form = $this->createForm(ContactMessageType::class, $contactEntity);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // persist entity
            $em = $this->getDoctrine()->getManager();
            $contactEntity->setDescription('');
            $em->persist($contactEntity);
            $em->flush();
            // send notifications
            $messenger->sendCommonUserNotification($contactEntity);
            $messenger->sendAdminNotification($contactEntity);

            return $this->redirectToRoute('app_thank_you');
        }

        return $this->render('Front/homepage.html.twig',
            [
                'map' => $map,
                'contactForm' => $form->createView(),
            ]
        );
    }

    private function setFlashMessageAndEmailNotifications(NotificationService $messenger, NewsletterContact $newsletterContact): void
    {
        // Send email notifications
        if (0 !== $messenger->sendCommonNewsletterUserNotification($newsletterContact)) {
            // Set frontend flash message
            $this->addFlash(
                'notice',
                'Gràcies per subscriure\'t al newsletter'
            );
        } else {
            $this->addFlash(
                'danger',
                'El teu missatge no s\'ha enviat'
            );
        }
        $messenger->sendNewsletterSubscriptionAdminNotification($newsletterContact);
    }

    /**
     * @Route("/preinscripcions", name="app_pre_register")
     */
    public function preRegistersAction(Request $request, EntityManagerInterface $em, NotificationService $messenger): Response
    {
        $preRegister = new PreRegister();
        $preRegisterForm = $this->createForm(PreRegisterType::class, $preRegister);
        $preRegisterForm->handleRequest($request);
        if ($preRegisterForm->isSubmitted() && $preRegisterForm->isValid()) {
            // Persist new pre-register record into DB with default values
            $preRegister
                ->setSeason(PreRegisterSeasonEnum::SEASON_SEPTEMBER_2022)
                ->setWantsToMakeOfficialExam(false)
                ->setEnabled(false)
            ;
            $em->persist($preRegister);
            $em->flush();
            if (0 !== $messenger->sendPreRegisterAdminNotification($preRegister)) {
                // Set frontend flash message
                $this->addFlash(
                    'notice',
                    'La teva preinscripció s\'ha enviat correctament. Ens posarem en contacte amb tu tan aviat com ens sigui possible.'
                );
            } else {
                $this->addFlash(
                    'danger',
                    'S\'ha produït un error inesperat durant el registre de la teva preinscripció. Si us plau, contacta directament amb nosaltres a través del telèfon que apareix al peu d\'aquesta pàgina. Gràcies.'
                );
            }
            // Clean up new form
            $preRegister = new PreRegister();
            $preRegisterForm = $this->createForm(PreRegisterType::class, $preRegister);
        }

        return $this->render(
            'Front/pre_register.html.twig',
            [
                'preRegisterForm' => $preRegisterForm->createView(),
            ]
        );
    }

    /**
     * @Route("/gracies", name="app_thank_you")
     */
    public function thankYouAction(): Response
    {
        return $this->render('Front/thank_you.html.twig', []);
    }

    /**
     * @Route("/politica-de-privacitat", name="app_privacy_policy")
     */
    public function privacyPolicyAction(): Response
    {
        return $this->render('Front/privacy_policy.html.twig', []);
    }

    /**
     * @Route("/credits", name="app_credits")
     */
    public function creditsAction(): Response
    {
        return $this->render('Front/credits.html.twig');
    }

    /**
     * @Route("/test-email", name="app_test_email")
     */
    public function testEmailAction(KernelInterface $kernel): Response
    {
        if (self::ENV_PROD === $kernel->getEnvironment()) {
            throw new AccessDeniedHttpException();
        }

        $invoice = $this->getDoctrine()->getRepository(Invoice::class)->find(8);

        return $this->render('Mails/invoice_pdf_notification.html.twig', [
            'invoice' => $invoice,
        ]);
    }
}
