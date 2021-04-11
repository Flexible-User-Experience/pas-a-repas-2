<?php

namespace App\Admin;

use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\DoctrineORMAdminBundle\Filter\DateTimeFilter;
use Sonata\Form\Type\DateTimePickerType;

class NewsletterContactAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Newsletter Contact';
    protected $baseRoutePattern = 'contacts/newsletter';
    protected $datagridValues = array(
        '_sort_by' => 'createdAt',
        '_sort_order' => 'desc',
    );

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection
            ->remove('create')
            ->remove('edit')
            ->remove('delete')
            ->remove('batch')
            ->add('answer', $this->getRouterIdParameter().'/answer')
            ->remove('batch');
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'createdAt',
                DateTimeFilter::class,
                array(
                    'label' => 'backend.admin.date',
                    'field_type' => DateTimePickerType::class,
                    'format' => 'd-m-Y H:i',
                ),
                null,
                array(
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy HH:mm',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.contact.email',
                )
            )
        ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'createdAt',
                'date',
                array(
                    'label' => 'backend.admin.contact.date',
                    'format' => 'd/m/Y H:i',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.contact.email',
                )
            )
        ;
    }
}
