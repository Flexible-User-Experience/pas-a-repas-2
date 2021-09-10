<?php

namespace App\Admin;

use App\Enum\UserRolesEnum;
use Sonata\UserBundle\Admin\Model\UserAdmin as ParentUserAdmin;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

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

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection->remove('batch');
        $collection->remove('export');
        $collection->remove('show');
    }

    public function getBatchActions(): array
    {
        $actions = parent::getBatchActions();
        unset($actions['delete']);

        return $actions;
    }

    protected function configureFormFields(FormMapper $formMapper): void
    {
        /* @var object $formMapper */
        $formMapper
            ->with('backend.admin.general', array('class' => 'col-md-3'))
            ->add(
                'firstname',
                null,
                array(
                    'label' => 'backend.admin.user.firstname',
                    'required' => false,
                )
            )
            ->add(
                'lastname',
                null,
                array(
                    'label' => 'backend.admin.user.lastname',
                    'required' => false,
                )
            )
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
                    'template' => 'Admin/Cells/list__cell_user_roles.html.twig',
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'backend.admin.enabled',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'header_class' => 'text-right',
                    'row_align' => 'right',
                    'label' => 'backend.admin.actions',
                    'actions' => array(
                        'edit' => array('template' => 'Admin/Buttons/list__action_edit_button.html.twig'),
                        'delete' => array('template' => 'Admin/Buttons/list__action_delete_button.html.twig'),
                    ),
                )
            );
    }
}
