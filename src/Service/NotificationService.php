<?php

namespace App\Service;

use App\Entity\ContactMessage;
use App\Entity\Invoice;
use App\Entity\NewsletterContact;
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
    private string $amd;
    private string $pub;

    public function __construct(CourierService $messenger, Environment $twig, $amd, $pub)
    {
        $this->messenger = $messenger;
        $this->twig = $twig;
        $this->amd = $amd;
        $this->pub = $pub;
    }

    /**
     * Send a common notification mail to frontend user.
     */
    public function sendCommonUserNotification(ContactMessage $contactMessage)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a contact form notification to administrator.
     */
    public function sendAdminNotification(ContactMessage $contactMessage)
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $contactMessage->getEmail(),
                $this->amd,
                $this->pub.' contact form received',
                $this->twig->render('Mails/contact_form_admin_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a contact form notification to admin user.
     */
    public function sendContactAdminNotification(ContactMessage $contactMessage)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send backend answer notification to web user.
     */
    public function sendUserBackendNotification(ContactMessage $contactMessage)
    {
        $result = 1;
        try {
            $this->messenger->sendEmail(
                $this->amd,
                $contactMessage->getEmail(),
                $this->pub.' contact form answer',
                $this->twig->render('Mails/contact_form_user_backend_notification.html.twig', array(
                    'contact' => $contactMessage,
                ))
            );
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a newsletter subscription form notification to admin user.
     */
    public function sendNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a newsletter subscription form notification to admin user on Mailchimp failure.
     */
    public function sendFailureNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a common notification mail to frontend user.
     */
    public function sendCommonNewsletterUserNotification(NewsletterContact $newsletterContact)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send attached remainder receipt PDF to customer.
     */
    public function sendReceiptReminderPdfNotification(Receipt $receipt, TCPDF $pdf)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send attached receipt PDF to customer.
     */
    public function sendReceiptPdfNotification(Receipt $receipt, TCPDF $pdf)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send attached invoice PDF to customer.
     */
    public function sendInvoicePdfNotification(Invoice $invoice, TCPDF $pdf)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }

    /**
     * Send a student absence notification mail to student or parent email.
     */
    public function sendStudentAbsenceNotification(StudentAbsence $studentAbsence)
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
        } catch (TransportExceptionInterface $exception) {
            $result = 0;
        } catch (Exception $e) {
            $result = 0;
        }

        return $result;
    }
}
