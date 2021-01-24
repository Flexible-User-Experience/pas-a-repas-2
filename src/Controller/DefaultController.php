<?php

namespace App\Controller;

use App\Entity\Invoice;
use App\Entity\NewsletterContact;
use App\Entity\Teacher;
use App\Form\Type\ContactHomepageType;
use App\Manager\MailchimpManager;
use App\Service\NotificationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController.
 */
class DefaultController extends AbstractController
{
    const ENV_DEV = 'dev';

    /**
     * @Route("/", name="app_homepage")
     */
    public function indexAction(Request $request, MailchimpManager $mailchimpManager, NotificationService $messenger): Response
    {
        $teachers = $this->getDoctrine()->getRepository(Teacher::class)->findAllEnabledSortedByPosition();

        $contact = new NewsletterContact();
        $newsletterForm = $this->createForm(ContactHomepageType::class, $contact);
        $newsletterForm->handleRequest($request);

        if ($newsletterForm->isSubmitted() && $newsletterForm->isValid()) {
            // Persist new contact message into DB
            $em = $this->getDoctrine()->getManager();
            $em->persist($contact);
            $em->flush();
            // Subscribe contact to mailchimp list
            $result = $mailchimpManager->subscribeContactToList($contact, $this->getParameter('mailchimp_list_id'));

            if (is_array($result) && MailchimpManager::SUBSCRIBED === $result['status']) {
                // Send notification and OK flash
                $this->setFlashMessageAndEmailNotifications($messenger, $contact);
                // Clean up new form
                $contact = new NewsletterContact();
                $newsletterForm = $this->createForm(ContactHomepageType::class, $contact);
            } else {
                // Mailchimp error
                $this->addFlash(
                    'danger',
                    'S\'ha produït un error durant el procés de registre al newsletter. Torna a provar-ho més tard o contacta a través del formulari web.'
                );
            }
        }

        return $this->render('Front/homepage.html.twig',
            [
                'teachers' => $teachers,
                'newsletterForm' => $newsletterForm->createView(),
            ]
        );
    }

    /**
     * @param NotificationService $messenger
     * @param NewsletterContact   $newsletterContact
     */
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
     * @Route("/politica-de-privacitat", name="app_privacy_policy")
     */
    public function privacyPolicyAction(): Response
    {
        return $this->render('Front/privacy_policy.html.twig', array());
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
        if ($kernel->getEnvironment() === 'prod') {
            throw new AccessDeniedHttpException();
        }

        $invoice = $this->getDoctrine()->getRepository(Invoice::class)->find(8);

        return $this->render('Mails/invoice_pdf_notification.html.twig', array(
            'invoice' => $invoice,
        ));
    }
}
