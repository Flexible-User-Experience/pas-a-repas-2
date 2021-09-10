<?php

namespace App\Admin;

use App\Repository\BlogCategoryRepository;
use Doctrine\ORM\QueryBuilder;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateFilter;
use Sonata\Form\Type\DatePickerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FileType;

class BlogPostAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Article';
    protected $baseRoutePattern = 'web/blog-post';
    protected $datagridValues = [
        '_sort_by' => 'publishedAt',
        '_sort_order' => 'desc',
    ];

    public function createQuery($context = 'list')
    {
        /** @var QueryBuilder $query */
        $query = parent::createQuery($context);
        $query
            ->select($query->getRootAliases()[0].', c')
            ->leftJoin($query->getRootAliases()[0].'.categories', 'c');

        return $query;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->with('backend.admin.post', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'publishedAt',
                DatePickerType::class,
                [
                    'label' => 'backend.admin.published_date',
                    'format' => 'd/M/y',
                ]
            )
            ->add(
                'imageFile',
                FileType::class,
                [
                    'label' => 'backend.admin.image',
                    'help' => $this->getImageHelperFormMapperWithThumbnail(),
                    'required' => false,
                ]
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'categories',
                null,
                [
                    'label' => 'backend.admin.categories',
                    'query_builder' => function (BlogCategoryRepository $repository) {
                        return $repository->getAllSortedByTitleQB();
                    },
                ]
            )
            ->add(
                'metaKeywords',
                null,
                [
                    'label' => 'backend.admin.metakeywords',
                    'help' => 'backend.admin.metakeywordshelp',
                ]
            )
            ->add(
                'metaDescription',
                null,
                [
                    'label' => 'backend.admin.metadescription',
                ]
            )
            ->add(
                'enabled',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.enabled',
                    'required' => false,
                ]
            )
            ->end()
            ->with('backend.admin.content', $this->getFormMdSuccessBoxArray(12))
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                ]
            )
            ->add(
                'description',
                CKEditorType::class,
                [
                    'label' => 'backend.admin.description',
                    'config_name' => 'my_config',
                    'required' => true,
                ]
            )
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'publishedAt',
                DateFilter::class,
                [
                    'label' => 'backend.admin.published_date',
                    'field_type' => DatePickerType::class,
                    'format' => 'd/M/y',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd/MM/yyyy',
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
                'categories',
                null,
                [
                    'label' => 'backend.admin.categories',
                ]
            )
            ->add(
                'description',
                null,
                [
                    'label' => 'backend.admin.description',
                ]
            )
            ->add(
                'metaKeywords',
                null,
                [
                    'label' => 'backend.admin.metakeywords',
                ]
            )
            ->add(
                'metaDescription',
                null,
                [
                    'label' => 'backend.admin.metadescription',
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

    protected function configureListFields(ListMapper $list)
    {
        $list
            ->add(
                'image',
                null,
                [
                    'label' => 'backend.admin.image',
                    'template' => 'Admin/Cells/list__cell_image_field.html.twig',
                ]
            )
            ->add(
                'publishedAt',
                'date',
                [
                    'label' => 'backend.admin.published_date',
                    'format' => 'd/m/Y',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'title',
                null,
                [
                    'label' => 'backend.admin.title',
                    'editable' => true,
                ]
            )
            ->add(
                'categories',
                null,
                [
                    'label' => 'backend.admin.categories',
                    'editable' => true,
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
