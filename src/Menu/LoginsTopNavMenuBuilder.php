<?php

namespace App\Menu;

use App\Entity\User;
use Knp\Menu\FactoryInterface;
use Knp\Menu\ItemInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * Class LoginsTopNavMenuBuilder.
 *
 * @category Menu
 */
class LoginsTopNavMenuBuilder
{
    /**
     * @var FactoryInterface
     */
    private $factory;

    /**
     * @var TokenStorageInterface
     */
    private $ts;

    /**
     * Methods.
     */

    /**
     * Constructor.
     *
     * @param FactoryInterface         $factory
     * @param TokenStorageInterface    $ts
     */
    public function __construct(FactoryInterface $factory, TokenStorageInterface $ts)
    {
        $this->factory = $factory;
        $this->ts = $ts;
    }

    /**
     * @return ItemInterface
     */
    public function createTopNavMenu()
    {
        $menu = $this->factory->createItem('topnav');
        $menu->setChildrenAttribute('class', 'navbar-nav ml-auto flex-nowrap');
        if ($this->ts->getToken()->getUser() && $this->ts->getToken()->getUser() instanceof User) {
            $item = $menu
                ->addChild(
                    'username',
                    array(
                        'label' => '<i class="fa fa-user text-warning"></i> '.$this->ts->getToken()->getUser()->getUsername(),
                        'uri' => '#',
                    )
                )
                ->setExtras(
                    array(
                        'safe_label' => true,
                    )
                )
            ;
            $item->setAttribute('class', 'nav-item');
            $item->setLinkAttribute('class', 'nav-link');
            $item = $menu
                ->addChild(
                    'admin',
                    array(
                        'label' => '<i class="fa fa-cog text-warning"></i>',
                        'route' => 'sonata_admin_dashboard',
                    )
                )
                ->setExtras(
                    array(
                        'safe_label' => true,
                    )
                )
            ;
            $item->setAttribute('class', 'nav-item');
            $item->setLinkAttribute('class', 'nav-link');
        }
        $item = $menu
            ->addChild(
                'home',
                array(
                    'label' => '<i class="fa fa-globe text-info"></i>',
                    'route' => 'main_test_logins_homepage',
                )
            )
            ->setExtras(
                array(
                    'safe_label' => true,
                )
            )
        ;
        $item->setAttribute('class', 'nav-item');
        $item->setLinkAttribute('class', 'nav-link');
        $item = $menu
            ->addChild(
                'facebook',
                array(
                    'label' => '<i class="fab fa-facebook-square text-info"></i>',
                    'route' => 'facebook_login',
                )
            )
            ->setExtras(
                array(
                    'safe_label' => true,
                )
            )
        ;
        $item->setAttribute('class', 'nav-item');
        $item->setLinkAttribute('class', 'nav-link');
        $item = $menu
            ->addChild(
                'logout',
                array(
                    'label' => '<i class="fa fa-power-off text-success"></i>',
                    'route' => 'sonata_user_admin_security_logout',
                )
            )
            ->setExtras(
                array(
                    'safe_label' => true,
                )
            )
        ;
        $item->setAttribute('class', 'nav-item');
        $item->setLinkAttribute('class', 'nav-link');

        return $menu;
    }
}
