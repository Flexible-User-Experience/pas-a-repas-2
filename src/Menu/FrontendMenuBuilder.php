<?php

namespace App\Menu;

use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authorization\AuthorizationChecker;

/**
 * Class FrontendMenuBuilder.
 *
 * @category Menu
 */
class FrontendMenuBuilder
{
    private FactoryInterface $factory;
    private AuthorizationChecker $ac;
    private TokenStorageInterface $ts;
    private string $ppo;

    /**
     * Methods.
     */

    /**
     * Constructor.
     *
     * @param FactoryInterface      $factory
     * @param AuthorizationChecker  $ac
     * @param TokenStorageInterface $ts
     */
    public function __construct(FactoryInterface $factory, AuthorizationChecker $ac, TokenStorageInterface $ts, string $ppo)
    {
        $this->factory = $factory;
        $this->ac = $ac;
        $this->ts = $ts;
        $this->ppo = $ppo;
    }

    /**
     * @return ItemInterface
     */
    public function createTopMenu()
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', 'nav navbar-nav navbar-right');
        if ($this->ts->getToken() && $this->ac->isGranted('ROLE_CMS')) {
            $menu->addChild(
                'admin',
                array(
                    'label' => 'frontend.menu.cms',
                    'route' => 'sonata_admin_dashboard',
                )
            );
        }
        $menu->addChild(
            'app_services',
            array(
                'label' => 'frontend.menu.services',
                'route' => 'app_services',
            )
        );
        $menu->addChild(
            'app_academy',
            array(
                'label' => 'frontend.menu.academy',
                'route' => 'app_academy',
            )
        );
        $menu->addChild(
            'app_contact',
            array(
                'label' => 'frontend.menu.contact',
                'route' => 'app_contact',
            )
        );
        // activate Preregister top menu option conditionally
        if ($this->ppo) {
            $menu->addChild(
                'app_pre_register',
                array(
                    'label' => 'frontend.menu.preregisters',
                    'route' => 'app_pre_register',
                    'attributes' => array(
                        'class' => 'violet-background',
                    ),
                    'linkAttributes' => array(
                        'class' => 'c-white',
                    ),
                )
            );
        }

        return $menu;
    }
}
