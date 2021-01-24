<?php

namespace App\Controller;

use App\Entity\ContactMessage;
use App\Entity\Invoice;
use App\Entity\NewsletterContact;
use App\Form\Type\ContactMessageType;
use App\Service\GoogleMapsService;
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
    public function indexAction(Request $request, GoogleMapsService $gms, NotificationService $messenger): Response
    {
        $flash = null;
        $mapObject = $gms->buildMap(40.7061278, 0.5817055555555556, 15);
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
            $messenger->sendUserNotification($contactEntity);
            $messenger->sendAdminNotification($contactEntity);
            // reset form
            $contactEntity = new ContactMessage();
            $form = $this->createForm(ContactMessageType::class, $contactEntity);
            // build flash message
            $flash = 'frontend.index.main.sent';
        }

        return $this->render('Front/homepage.html.twig',
            [
                'mapView' => $mapObject,
                'contactForm' => $form->createView(),
                'flash' => $flash,
            ]
        );

//
//
//
//        $teachers = $this->getDoctrine()->getRepository(Teacher::class)->findAllEnabledSortedByPosition();
//
//        $contact = new NewsletterContact();
//        $newsletterForm = $this->createForm(ContactHomepageType::class, $contact);
//        $newsletterForm->handleRequest($request);
//
//        if ($newsletterForm->isSubmitted() && $newsletterForm->isValid()) {
//            // Persist new contact message into DB
//            $em = $this->getDoctrine()->getManager();
//            $em->persist($contact);
//            $em->flush();
//            // Subscribe contact to mailchimp list
//            $result = $mailchimpManager->subscribeContactToList($contact, $this->getParameter('mailchimp_list_id'));
//
//            if (is_array($result) && MailchimpManager::SUBSCRIBED === $result['status']) {
//                // Send notification and OK flash
//                $this->setFlashMessageAndEmailNotifications($messenger, $contact);
//                // Clean up new form
//                $contact = new NewsletterContact();
//                $newsletterForm = $this->createForm(ContactHomepageType::class, $contact);
//            } else {
//                // Mailchimp error
//                $this->addFlash(
//                    'danger',
//                    'S\'ha produït un error durant el procés de registre al newsletter. Torna a provar-ho més tard o contacta a través del formulari web.'
//                );
//            }
//        }
//
//        return $this->render('Front/homepage.html.twig',
//            [
//                'teachers' => $teachers,
//                'newsletterForm' => $newsletterForm->createView(),
//            ]
//        );
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
