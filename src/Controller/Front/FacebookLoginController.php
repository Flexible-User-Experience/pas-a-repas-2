<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
