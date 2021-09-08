<?php

namespace App\Admin;

use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateFilter;
use Sonata\Form\Type\DatePickerType;

class ContactMessageAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Contact Message';
    protected $baseRoutePattern = 'contacts/message';
    protected $datagridValues = array(
        '_sort_by' => 'createdAt',
        '_sort_order' => 'desc',
    );

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection
            ->remove('create')
            ->remove('edit')
            ->remove('batch')
            ->add('answer', $this->getRouterIdParameter().'/answer');
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'checked',
                null,
                array(
                    'label' => 'backend.admin.contact.checked',
                )
            )
            ->add(
                'createdAt',
                DateFilter::class,
                array(
                    'label' => 'backend.admin.date',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ),
                null,
                array(
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.contact.name',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.contact.email',
                )
            )
            ->add(
                'subject',
                null,
                array(
                    'label' => 'backend.admin.contact.subject',
                )
            )
            ->add(
                'message',
                null,
                array(
                    'label' => 'backend.admin.contact.message',
                )
            )
            ->add(
                'answered',
                null,
                array(
                    'label' => 'backend.admin.contact.answered',
                )
            )
            ->add(
                'description',
                null,
                array(
                    'label' => 'backend.admin.contact.description',
                )
            );
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add(
                'checked',
                null,
                array(
                    'label' => 'backend.admin.contact.checked',
                )
            )
            ->add(
                'createdAt',
                'date',
                array(
                    'label' => 'backend.admin.date',
                    'format' => 'd/m/Y H:i',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.contact.name',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.contact.email',
                )
            )
            ->add(
                'message',
                'textarea',
                array(
                    'label' => 'backend.admin.contact.message',
                )
            )
            ->add(
                'answered',
                null,
                array(
                    'label' => 'backend.admin.contact.answered',
                )
            );
        if ($this->getSubject() && $this->getSubject()->getAnswered()) {
            $show
                ->add(
                    'description',
                    'textarea',
                    array(
                        'label' => 'backend.admin.contact.answer',
                    )
                );
        }
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'checked',
                null,
                array(
                    'label' => 'backend.admin.contact.checked',
                )
            )
            ->add(
                'createdAt',
                'date',
                array(
                    'label' => 'backend.admin.contact.date',
                    'format' => 'd/m/Y',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.contact.name',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.contact.email',
                )
            )
            ->add(
                'answered',
                null,
                array(
                    'label' => 'backend.admin.contact.answered',
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'actions' => array(
                        'show' => array(
                            'template' => 'Admin/Buttons/list__action_show_button.html.twig',
                        ),
                        'answer' => array(
                            'template' => 'Admin/Cells/list__action_answer.html.twig',
                        ),
                        'delete' => array(
                            'template' => 'Admin/Buttons/list__action_delete_button.html.twig',
                        ),
                    ),
                )
            )
        ;
    }

    public function getExportFields(): array
    {
        return array(
            'checked',
            'createdAtString',
            'name',
            'email',
            'subject',
            'message',
            'answered',
            'description',
        );
    }
}
