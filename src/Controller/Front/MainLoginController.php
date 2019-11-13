<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MainLoginController
 *
 * @Route("/test/logins")
 */
class MainLoginController extends AbstractController
{
    /**
     * @Route("/main", name="main_test_logins_homepage")
     *
     * @return Response
     */
    public function mainTestLoginsAction()
    {
        return $this->render('logins/main_test_login.html.twig', [
            'controller_name' => 'MainLoginController',
        ]);
    }
}
