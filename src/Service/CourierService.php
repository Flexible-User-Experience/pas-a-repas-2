<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mime\Email;
use TCPDF;

class CourierService
{
    private MailerInterface $mailer;

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Send an email.
     */
    public function sendEmail($from, $toEmail, $subject, $body, $replyAddress = null, $toName = null)
    {
        $message = $this->buildEmail($from, $toEmail, $subject, $body, $replyAddress, $toName);

        $this->mailer->send($message);
    }

    /**
     * Send an email with an attatchment PDF.
     */
    public function sendEmailWithPdfAttached($from, $toEmail, $toName, $subject, $body, $pdfFilename, TCPDF $pdf)
    {
        $message = $this->buildEmail($from, $toEmail, $subject, $body, null, $toName);
        $pathToTemporaryStoredPdfFile = DIRECTORY_SEPARATOR.'tmp'.DIRECTORY_SEPARATOR.$pdfFilename;
        $pdf->Output($pathToTemporaryStoredPdfFile, 'F');
        $message->attachFromPath($pathToTemporaryStoredPdfFile, $pdfFilename, 'application/pdf');

        $this->mailer->send($message);
    }

    /**
     * Build an email.
     */
    private function buildEmail($from, $toEmail, $subject, $body, $replyAddress = null, $toName = null)
    {
        $message = new Email();
        $message
            ->subject($subject)
            ->from(new Address($from))
            ->to(new Address($toEmail, is_null($toName) ? '' : $toName))
            ->html($body);
        if (!is_null($replyAddress)) {
            $message->replyTo(new Address($replyAddress));
        }

        return $message;
    }
}
