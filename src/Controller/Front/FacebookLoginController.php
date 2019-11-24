<?php

namespace App\Controller\Front;

use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\Provider\FacebookClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     * @Route("/connect/facebook", name="connect_facebook_start")
     *
     * @param ClientRegistry $clientRegistry
     *
     * @return RedirectResponse
     */
    public function connectAction(ClientRegistry $clientRegistry)
    {
        // will redirect to Facebook!
        return $clientRegistry
            ->getClient('facebook_main') // key used in config/packages/knpu_oauth2_client.yaml
            ->redirect([
                'public_profile',
                'email',
                // the scopes you want to access
            ],  []);
    }

    /**
     * After going to Facebook, you're redirected back here
     * because this is the "redirect_route" you configured
     * in config/packages/knpu_oauth2_client.yaml
     *
     * @Route("/connect/facebook/check", name="connect_facebook_check")
     *
     * @return Response|RedirectResponse
     */
    public function connectCheckAction()
    {
        // ** if you want to *authenticate* the user, then
        // leave this method blank and create a Guard authenticator
        // (read below)

        /** @var FacebookClient $client *
        $client = $clientRegistry->getClient('facebook_main');

        try {
            // the exact class depends on which provider you're using
            /** @var FacebookUser $user *
            $fbUser = $client->fetchUser();
            $user = $this->getDoctrine()->getRepository(User::class)->findOneBy([
                'email' => $fbUser->getEmail(),
            ]);
            if ($user) {
                return $this->render('logins/knp_facebook_login.html.twig', [
                    'controller_name' => 'FacebookLoginController',
                ]);
            } else {
                return $this->render('logins/main_test_login.html.twig', [
                    'controller_name' => 'MainLoginController · connectCheckAction',
                    'auth_error' => 'No user found with email '.$fbUser->getEmail(),
                ]);
            }
        } catch (IdentityProviderException $e) {
            return $this->render('logins/main_test_login.html.twig', [
                'controller_name' => 'MainLoginController · connectCheckAction',
                'auth_error' => $e->getMessage(),
            ]);
        }
         * */

        return $this->redirectToRoute('main_test_logins_homepage');
    }

    /**
     * @Route("/facebook", name="facebook_login")
     *
     * @return Response
     */
    public function loginAction()
    {
        return $this->render('logins/knp_facebook_login.html.twig', [
            'controller_name' => 'FacebookLoginController',
        ]);
    }

    /**
     * @Route("/facebook-login-error", name="facebook_login_error")
     *
     * @return Response
     */
    public function loginErrorAction()
    {
        return $this->render('logins/main_test_login.html.twig', [
            'controller_name' => 'MainLoginController',
            'auth_error' => 'facebook_login_error',
        ]);
    }
}
