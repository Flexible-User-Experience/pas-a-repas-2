<?php

namespace App\Controller\Front;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * Class FacebookLoginController
 *
 * @Route("/test/logins")
 */
class FacebookLoginController extends AbstractController
{
    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/facebook/connect", name="connect_facebook_start")
     *
     * @param ClientRegistry $clientRegistry
     *
     * @return RedirectResponse
     */
    public function connectAction(ClientRegistry $clientRegistry)
    {
        return $clientRegistry->getClient('facebook')->redirect(['public_profile', 'email'], []);
    }

    /**
     * After going to Facebook, you're redirected back here
     * because this is the "redirect_route" you configured
     * in config/packages/knpu_oauth2_client.yaml
     *
     * @param Request $request
     * @param ClientRegistry $clientRegistry
     *
     * @Route("/facebook/connect/check", name="connect_facebook_check")
     *
     * @return RedirectResponse
     */
    public function connectCheckAction(Request $request, ClientRegistry $clientRegistry)
    {
        return $this->redirectToRoute('sonata_admin_dashboard');
    }

    /**
     * @Route("/facebook", name="facebook_login")
     *
     * @return Response
     */
    public function index()
    {
        return $this->render('logins/knp_facebook_login.html.twig', [
            'controller_name' => 'FacebookLoginController',
        ]);
    }
}
