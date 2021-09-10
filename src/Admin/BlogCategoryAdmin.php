<?php

namespace App\Admin;

use Doctrine\ORM\QueryBuilder;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class BlogCategoryAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Categoria';
    protected $baseRoutePattern = 'web/blog-category';
    protected $datagridValues = [
        '_sort_by' => 'title',
        '_sort_order' => 'asc',
    ];

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection->remove('batch');
    }

    public function createQuery($context = 'list')
    {
        /** @var QueryBuilder $query */
        $query = parent::createQuery($context);
        $query
            ->select($query->getRootAliases()[0].', p')
            ->leftJoin($query->getRootAliases()[0].'.posts', 'p');

        return $query;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->with('backend.admin.category', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                ]
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'enabled',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.enabled',
                    'required' => false,
                ]
            )
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                ]
            )
            ->add(
                'posts',
                null,
                [
                    'label' => 'backend.admin.posts',
                ]
            )
            ->add(
                'enabled',
                null,
                [
                    'label' => 'backend.admin.enabled',
                ]
            )
        ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add(
                'createdAt',
                'date',
                [
                    'label' => 'backend.admin.date',
                    'format' => 'd/m/Y H:i',
                ]
            )
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                ]
            )
            ->add(
                'posts',
                null,
                [
                    'label' => 'backend.admin.posts',
                ]
            )
            ->add(
                'enabled',
                null,
                [
                    'label' => 'backend.admin.enabled',
                ]
            )
        ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                    'editable' => true,
                ]
            )
            ->add(
                'count',
                null,
                [
                    'label' => 'backend.admin.posts_amount',
                    'template' => 'Admin/Cells/list__cell_posts_amount_field.html.twig',
                    'header_class' => 'text-right',
                    'row_align' => 'right',
                ]
            )
            ->add(
                'enabled',
                null,
                [
                    'label' => 'backend.admin.enabled',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                '_action',
                'actions',
                [
                    'header_class' => 'text-right',
                    'row_align' => 'right',
                    'actions' => [
                        'show' => [
                            'template' => 'Admin/Buttons/list__action_show_button.html.twig',
                        ],
                        'edit' => [
                            'template' => 'Admin/Buttons/list__action_edit_button.html.twig',
                        ],
                        'delete' => [
                            'template' => 'Admin/Buttons/list__action_delete_button.html.twig',
                        ],
                    ],
                    'label' => 'backend.admin.actions',
                ]
            )
        ;
    }
}
