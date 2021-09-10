<?php

namespace App\Service;

use App\Entity\ContactMessage;
use App\Entity\Invoice;
use App\Entity\NewsletterContact;
use App\Entity\PreRegister;
use App\Entity\Receipt;
use App\Entity\StudentAbsence;
use Exception;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use TCPDF;
use Twig\Environment;

class NotificationService
{
    private CourierService $messenger;
    private Environment $twig;
    private string $amd; // app email destination
    private string $pub; // project URL base

    public function __construct(CourierService $messenger, Environment $twig, string $amd, string $pub)
    {
        $this->messenger = $messenger;
        $this->twig = $twig;
        $this->amd = $amd;
        $this->pub = $pub;
    }

    public function sendCommonUserNotification(ContactMessage $contactMessage): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $contactMessage->getEmail(),
                'Notificació pàgina web '.$this->pub,
                $this->twig->render('Mails/common_user_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendAdminNotification(ContactMessage $contactMessage): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $contactMessage->getEmail(),
                $this->amd,
                'Formulari contacte pàgina web '.$this->pub,
                $this->twig->render('Mails/contact_form_admin_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendContactAdminNotification(ContactMessage $contactMessage): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $this->amd,
                'Missatge de contacte pàgina web '.$this->pub,
                $this->twig->render('Mails/contact_form_admin_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendUserBackendNotification(ContactMessage $contactMessage): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $contactMessage->getEmail(),
                'Reposta missatge de contacte pàgina web '.$this->pub,
                $this->twig->render('Mails/contact_form_user_backend_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $this->amd,
                'Missatge de newsletter pàgina web '.$this->pub,
                $this->twig->render('Mails/newsletter_form_admin_notification.html.twig', array(
                    'contact' => $newsletterContact,
                )),
                $newsletterContact->getEmail()
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendFailureNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $this->amd,
                'Missatge de newsletter pàgina web '.$this->pub,
                $this->twig->render('Mails/newsletter_failure_admin_notification.html.twig', array(
                    'contact' => $newsletterContact,
                )),
                $newsletterContact->getEmail()
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendCommonNewsletterUserNotification(NewsletterContact $newsletterContact): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $newsletterContact->getEmail(),
                'Notificació newsletter pàgina web '.$this->pub,
                $this->twig->render('Mails/common_newsletter_user_notification.html.twig', array(
                    'contact' => $newsletterContact,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendReceiptReminderPdfNotification(Receipt $receipt, TCPDF $pdf): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmailWithPdfAttached(
                $this->amd,
                $receipt->getMainEmail(),
                $receipt->getMainEmailName(),
                'Recordatori de pagament rebut Pas a Repàs núm. '.$receipt->getReceiptNumber(),
                $this->twig->render('Mails/receipt_reminder_pdf_notification.html.twig', array(
                    'receipt' => $receipt,
                )),
                'receipt_'.$receipt->getSluggedReceiptNumber().'.pdf',
                $pdf
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendReceiptPdfNotification(Receipt $receipt, TCPDF $pdf): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmailWithPdfAttached(
                $this->amd,
                $receipt->getMainEmail(),
                $receipt->getMainEmailName(),
                'Rebut Pas a Repàs núm. '.$receipt->getReceiptNumber(),
                $this->twig->render('Mails/receipt_pdf_notification.html.twig', array(
                    'receipt' => $receipt,
                )),
                'receipt_'.$receipt->getSluggedReceiptNumber().'.pdf',
                $pdf
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendInvoicePdfNotification(Invoice $invoice, TCPDF $pdf): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmailWithPdfAttached(
                $this->amd,
                $invoice->getMainEmail(),
                $invoice->getMainEmailName(),
                'Factura Pas a Repàs núm. '.$invoice->getInvoiceNumber(),
                $this->twig->render('Mails/invoice_pdf_notification.html.twig', array(
                    'invoice' => $invoice,
                )),
                'invoice_'.$invoice->getSluggedInvoiceNumber().'.pdf',
                $pdf
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendStudentAbsenceNotification(StudentAbsence $studentAbsence): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $studentAbsence->getStudent()->getMainEmailSubject(),
                'Falta a classe el dia '.$studentAbsence->getDayString(),
                $this->twig->render('Mails/student_absence_notification.html.twig', array(
                    'studentAbsence' => $studentAbsence,
                ))
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }

    public function sendPreRegisterAdminNotification(PreRegister $preRegister): int
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $this->amd,
                'Registre formulari preinscripció pàgina web '.$this->pub,
                $this->twig->render('Mails/pre_register_form_admin_notification.html.twig', array(
                    'preRegister' => $preRegister,
                )),
                $preRegister->getEmail()
            );
        } catch (TransportExceptionInterface | Exception $exception) {
            $result = 0;
        }

        return $result;
    }
}
