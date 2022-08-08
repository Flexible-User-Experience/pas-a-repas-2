<?php

namespace App\Admin;

use App\Doctrine\Enum\SortOrderTypeEnum;
use App\Entity\AbstractBase;
use Sonata\AdminBundle\Datagrid\DatagridInterface;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollectionInterface;
use Sonata\AdminBundle\Show\ShowMapper;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

final class BlogCategoryAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Categoria';
    protected $baseRoutePattern = 'web/blog-category';

    protected function configureDefaultSortValues(array &$sortValues): void
    {
        $sortValues[DatagridInterface::PAGE] = 1;
        $sortValues[DatagridInterface::SORT_ORDER] = SortOrderTypeEnum::ASC;
        $sortValues[DatagridInterface::SORT_BY] = 'title';
    }

    protected function configureRoutes(RouteCollectionInterface $collection): void
    {
        $collection->remove('batch');
    }

    protected function configureQuery(ProxyQueryInterface $query): ProxyQueryInterface
    {
        $query = parent::configureQuery($query);
        $rootAlias = current($query->getRootAliases());
        $query
            ->select($rootAlias.', p')
            ->leftJoin($rootAlias.'.posts', 'p')
        ;

        return $query;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->with('backend.admin.category', $this->getFormMdSuccessBoxArray('backend.admin.category'))
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                ]
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray('backend.admin.controls'))
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
                    'format' => AbstractBase::DATETIME_STRING_FORMAT,
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
                'id',
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
                ListMapper::NAME_ACTIONS,
                null,
                [
                    'label' => 'backend.admin.actions',
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
                ]
            )
        ;
    }
}
