<?php

namespace App\Service;

use App\Entity\ContactMessage;
use App\Entity\Invoice;
use App\Entity\NewsletterContact;
use App\Entity\Receipt;
use App\Entity\StudentAbsence;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;
use Twig\Environment;

/**
 * Class NotificationService.
 *
 * @category Service
 */
class NotificationService
{
    /**
     * @var CourierService
     */
    private $messenger;

    /**
     * @var \Twig_Environment
     */
    private $twig;

    /**
     * @var string system's app email
     */
    private $amd;

    /**
     * @var string
     */
    private $urlBase;

    /**
     * Methods.
     */

    /**
     * NotificationService constructor.
     *
     * @param CourierService $messenger
     * @param Environment    $twig
     * @param string         $amd
     * @param string         $urlBase
     */
    public function __construct(CourierService $messenger, Environment $twig, $amd, $urlBase)
    {
        $this->messenger = $messenger;
        $this->twig = $twig;
        $this->amd = $amd;
        $this->urlBase = $urlBase;
    }

    /**
     * Send a common notification mail to frontend user.
     *
     * @param ContactMessage $contactMessage
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendCommonUserNotification(ContactMessage $contactMessage)
    {
        return $this->messenger->sendEmail(
            $this->amd,
            $contactMessage->getEmail(),
            'Notificació pàgina web '.$this->urlBase,
            $this->twig->render('mails/common_user_notification.html.twig', array(
                'contact' => $contactMessage,
            ))
        );
    }

    /**
     * Send a contact form notification to administrator.
     *
     * @param ContactMessage $contactMessage
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendAdminNotification(ContactMessage $contactMessage)
    {
        $this->messenger->sendEmail(
            $contactMessage->getEmail(),
            $this->amd,
            $this->urlBase.' contact form received',
            $this->twig->render('mails/contact_form_admin_notification.html.twig', array(
                'contact' => $contactMessage,
            ))
        );
    }

    /**
     * Send a contact form notification to admin user.
     *
     * @param ContactMessage $contactMessage
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendContactAdminNotification(ContactMessage $contactMessage)
    {
        $this->messenger->sendEmail(
            $this->amd,
            $this->amd,
            'Missatge de contacte pàgina web '.$this->urlBase,
            $this->twig->render('mails/contact_form_admin_notification.html.twig', array(
                'contact' => $contactMessage,
            ))
        );
    }

    /**
     * Send backend answer notification to web user.
     *
     * @param ContactMessage $contactMessage
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendUserBackendNotification(ContactMessage $contactMessage)
    {
        $this->messenger->sendEmail(
            $this->amd,
            $contactMessage->getEmail(),
            $this->urlBase.' contact form answer',
            $this->twig->render('mails/contact_form_user_backend_notification.html.twig', array(
                'contact' => $contactMessage,
            ))
        );
    }

    /**
     * Send a newsletter subscription form notification to admin user.
     *
     * @param NewsletterContact $newsletterContact
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact)
    {
        $this->messenger->sendEmail(
            $this->amd,
            $this->amd,
            'Missatge de newsletter pàgina web '.$this->urlBase,
            $this->twig->render('mails/newsletter_form_admin_notification.html.twig', array(
                'contact' => $newsletterContact,
            )),
            $newsletterContact->getEmail()
        );
    }

    /**
     * Send a newsletter subscription form notification to admin user on Mailchimp failure.
     *
     * @param NewsletterContact $newsletterContact
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendFailureNewsletterSubscriptionAdminNotification(NewsletterContact $newsletterContact)
    {
        $this->messenger->sendEmail(
            $this->amd,
            $this->amd,
            'Missatge de newsletter pàgina web '.$this->urlBase,
            $this->twig->render('mails/newsletter_failure_admin_notification.html.twig', array(
                'contact' => $newsletterContact,
            )),
            $newsletterContact->getEmail()
        );
    }

    /**
     * Send a common notification mail to frontend user.
     *
     * @param NewsletterContact $newsletterContact
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendCommonNewsletterUserNotification(NewsletterContact $newsletterContact)
    {
        return $this->messenger->sendEmail(
            $this->amd,
            $newsletterContact->getEmail(),
            'Notificació newsletter pàgina web '.$this->urlBase,
            $this->twig->render('mails/common_newsletter_user_notification.html.twig', array(
                'contact' => $newsletterContact,
            ))
        );
    }

    /**
     * Send attached remainder receipt PDF to customer.
     *
     * @param Receipt $receipt
     * @param \TCPDF  $pdf
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendReceiptReminderPdfNotification(Receipt $receipt, \TCPDF $pdf)
    {
        return $this->messenger->sendEmailWithPdfAttached(
            $this->amd,
            $receipt->getMainEmail(),
            $receipt->getMainEmailName(),
            'Recordatori de pagament rebut Box Idiomes núm. '.$receipt->getReceiptNumber(),
            $this->twig->render('mails/receipt_reminder_pdf_notification.html.twig', array(
                'receipt' => $receipt,
            )),
            'receipt_'.$receipt->getSluggedReceiptNumber().'.pdf',
            $pdf
        );
    }

    /**
     * Send attached receipt PDF to customer.
     *
     * @param Receipt $receipt
     * @param \TCPDF  $pdf
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendReceiptPdfNotification(Receipt $receipt, \TCPDF $pdf)
    {
        return $this->messenger->sendEmailWithPdfAttached(
            $this->amd,
            $receipt->getMainEmail(),
            $receipt->getMainEmailName(),
            'Rebut Box Idiomes núm. '.$receipt->getReceiptNumber(),
            $this->twig->render('mails/receipt_pdf_notification.html.twig', array(
                'receipt' => $receipt,
            )),
            'receipt_'.$receipt->getSluggedReceiptNumber().'.pdf',
            $pdf
        );
    }

    /**
     * Send attached invoice PDF to customer.
     *
     * @param Invoice $invoice
     * @param \TCPDF  $pdf
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendInvoicePdfNotification(Invoice $invoice, \TCPDF $pdf)
    {
        return $this->messenger->sendEmailWithPdfAttached(
            $this->amd,
            $invoice->getMainEmail(),
            $invoice->getMainEmailName(),
            'Factura Box Idiomes núm. '.$invoice->getInvoiceNumber(),
            $this->twig->render('mails/invoice_pdf_notification.html.twig', array(
                'invoice' => $invoice,
            )),
            'invoice_'.$invoice->getSluggedInvoiceNumber().'.pdf',
            $pdf
        );
    }

    /**
     * Send a student absence notification mail to student or parent email.
     *
     * @param StudentAbsence $studentAbsence
     *
     * @return int If is 0 failure otherwise amount of recipients
     *
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function sendStudentAbsenceNotification(StudentAbsence $studentAbsence)
    {
        return $this->messenger->sendEmail(
            $this->amd,
            $studentAbsence->getStudent()->getMainEmailSubject(),
            'Falta a classe el dia '.$studentAbsence->getDayString(),
            $this->twig->render('mails/student_absence_notification.html.twig', array(
                'studentAbsence' => $studentAbsence,
            ))
        );
    }
}
