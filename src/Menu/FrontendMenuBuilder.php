<?php

namespace App\Menu;

use App\Enum\UserRolesEnum;
use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Security;

class FrontendMenuBuilder
{
    private FactoryInterface $factory;
    private Security $ss;
    private RequestStack $rs;
    private RouterInterface $router;
    private string $ppo;

    public function __construct(FactoryInterface $factory, Security $ss, RequestStack $rs, RouterInterface $router, ParameterBagInterface $pb)
    {
        $this->factory = $factory;
        $this->ss = $ss;
        $this->rs = $rs;
        $this->router = $router;
        $this->ppo = $pb->get('preregister_period_is_open');
    }

    public function createTopMenu(): ItemInterface
    {
        $current = '';
        if ($this->rs->getCurrentRequest()) {
            $current = $this->rs->getCurrentRequest()->get('_route');
        }
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', 'navbar-nav ms-auto mb-2 mb-lg-0');
        if ($this->ss->isGranted(UserRolesEnum::ROLE_CMS)) {
            $menu->addChild(
                'admin',
                [
                    'label' => 'frontend.menu.cms',
                    'route' => 'sonata_admin_dashboard',
                    'attributes' => [
                        'class' => 'nav-item',
                    ],
                    'linkAttributes' => [
                        'class' => 'nav-link',
                    ],
                ]
            );
        }
        $menu->addChild(
            'app_classes',
            [
                'label' => 'frontend.layout.menu.courses',
                'uri' => $this->router->generate('app_homepage').'#classes-de-repas',
                'attributes' => [
                    'class' => 'nav-item',
                ],
                'linkAttributes' => [
                    'class' => 'nav-link'.('app_classes' === $current ? ' active' : ''),
                ],
            ]
        );
        $menu->addChild(
            'app_about_me',
            [
                'label' => 'frontend.layout.menu.about',
                'uri' => $this->router->generate('app_homepage').'#sobre-mi',
                'attributes' => [
                    'class' => 'nav-item',
                ],
                'linkAttributes' => [
                    'class' => 'nav-link'.('app_about_me' === $current ? ' active' : ''),
                ],
            ]
        );
        $menu->addChild(
            'app_contact',
            [
                'label' => 'frontend.layout.menu.contact',
                'uri' => $this->router->generate('app_homepage').'#contacte',
                'attributes' => [
                    'class' => 'nav-item',
                ],
                'linkAttributes' => [
                    'class' => 'nav-link'.('app_contact' === $current ? ' active' : ''),
                ],
            ]
        );
        $menu->addChild(
            'app_blog',
            [
                'label' => 'frontend.layout.menu.blog',
                'route' => 'app_blog',
                'attributes' => [
                    'class' => 'nav-item',
                ],
                'linkAttributes' => [
                    'class' => 'nav-link'.('app_blog' === $current || 'app_blog_detail' === $current || 'app_blog_category_detail' === $current ? ' active' : ''),
                ],
            ]
        );
        // activate Preregister top menu option conditionally
        if ($this->ppo) {
            $menu->addChild(
                'app_pre_register',
                [
                    'label' => 'frontend.menu.preregisters',
                    'route' => 'app_pre_register',
                    'attributes' => [
                        'class' => 'nav-item violet-background',
                    ],
                    'linkAttributes' => [
                        'class' => 'nav-link text-white'.('app_pre_register' === $current ? ' active' : ''),
                    ],
                ]
            );
        }

        return $menu;
    }
}
