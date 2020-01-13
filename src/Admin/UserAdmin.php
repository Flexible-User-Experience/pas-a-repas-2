<?php

namespace App\Admin;

use App\Enum\UserRolesEnum;
use Sonata\AdminBundle\Form\Type\Filter\ChoiceType;
use Sonata\UserBundle\Admin\Model\UserAdmin as ParentUserAdmin;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * Class UserAdmin.
 *
 * @category Admin
 */
class UserAdmin extends ParentUserAdmin
{
    /**
     * @var UserManagerInterface
     */
    protected $userManager;

    protected $classnameLabel = 'User';
    protected $baseRoutePattern = 'users';
    protected $datagridValues = array(
        '_sort_by' => 'username',
        '_sort_order' => 'asc',
    );

    /**
     * Methods
     */

    /**
     * UserAdmin constructor.
     *
     * @param $code
     * @param $class
     * @param $baseControllerName
     * @param $userManager
     */
    public function __construct($code, $class, $baseControllerName, $userManager)
    {
        parent::__construct($code, $class, $baseControllerName);
        $this->userManager = $userManager;
    }

    /**
     * Available routes.
     *
     * @param RouteCollection $collection
     */
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection->remove('batch');
        $collection->remove('export');
        $collection->remove('show');
    }

    /**
     * Remove batch action list view first column.
     *
     * @return array
     */
    public function getBatchActions()
    {
        $actions = parent::getBatchActions();
        unset($actions['delete']);

        return $actions;
    }

    /**
     * @param FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper): void
    {
        /* @var object $formMapper */
        $formMapper
            ->with('backend.admin.general', array('class' => 'col-md-3'))
            ->add(
                'firstname',
                TextType::class,
                array(
                    'label' => 'backend.admin.user.firstname',
                    'required' => false,
                )
            )
            ->add(
                'lastname',
                TextType::class,
                array(
                    'label' => 'backend.admin.user.lastname',
                    'required' => false,
                )
            )
            ->add(
                'username',
                TextType::class,
                array(
                    'label' => 'backend.admin.user.username',
                )
            )
            ->add(
                'email',
                EmailType::class,
                array(
                    'label' => 'backend.admin.user.email',
                )
            )
            ->add(
                'plainPassword',
                TextType::class,
                array(
                    'label' => 'backend.admin.user.plain_password',
                    'required' => (!$this->getSubject() || is_null($this->getSubject()->getId())),
                )
            )
            ->end()
            ->with('backend.admin.controls', array('class' => 'col-md-3'))
            ->add(
                'enabled',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.enabled',
                    'required' => false,
                )
            )
            ->add(
                'roles',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.user.roles',
                    'choices' => UserRolesEnum::getEnumArray(),
                    'multiple' => true,
                    'expanded' => true,
                )
            )
            ->end();
    }

    /**
     * @param DatagridMapper $filterMapper
     */
    protected function configureDatagridFilters(DatagridMapper $filterMapper): void
    {
        $filterMapper
            ->add(
                'username',
                null,
                array(
                    'label' => 'backend.admin.user.username',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.user.email',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'backend.admin.enabled',
                )
            );
    }

    /**
     * @param ListMapper $listMapper
     */
    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper
            ->add(
                'username',
                null,
                array(
                    'label' => 'backend.admin.user.username',
                    'editable' => true,
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.user.email',
                    'editable' => true,
                )
            )
            ->add(
                'roles',
                null,
                array(
                    'label' => 'backend.admin.user.roles',
                    'template' => 'admin/cells/list__cell_user_roles.html.twig',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'backend.admin.enabled',
                    'editable' => true,
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'label' => 'backend.admin.actions',
                    'actions' => array(
//                       TODO 'edit' => array('template' => 'admin/buttons/list__action_edit_button.html.twig'),
                        'delete' => array('template' => 'admin/buttons/list__action_delete_button.html.twig'),
                    ),
                )
            );
    }
}
