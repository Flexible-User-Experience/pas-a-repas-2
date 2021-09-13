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

class DefaultController extends AbstractController
{
    public const ENV_DEV = 'dev';
    public const ENV_PROD = 'prod';

    /**
     * @Route("/", name="app_homepage")
     */
    public function indexAction(Request $request, GoogleMapsService $gms, NotificationService $messenger): Response
    {
        $mapObject = $gms->buildMap(40.7061278, 0.5817055555555556);
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
                'mapView' => $mapObject,
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
     * @Route("/gracies", name="app_thank_you")
     */
    public function thankYouAction(): Response
    {
        return $this->render('Front/thank_you.html.twig', array());
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
        if ($kernel->getEnvironment() === self::ENV_PROD) {
            throw new AccessDeniedHttpException();
        }

        $invoice = $this->getDoctrine()->getRepository(Invoice::class)->find(8);

        return $this->render('Mails/invoice_pdf_notification.html.twig', array(
            'invoice' => $invoice,
        ));
    }
}
