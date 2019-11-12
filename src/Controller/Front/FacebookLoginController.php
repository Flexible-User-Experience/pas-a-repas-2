<?php

namespace App\Controller\Front;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FacebookLoginController extends AbstractController
{
    /**
     * @Route("/facebook/login", name="facebook_login")
     */
    public function index()
    {
        return $this->render('facebook_login/index.html.twig', [
            'controller_name' => 'FacebookLoginController',
        ]);
    }
}
