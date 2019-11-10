<?php

namespace App\Admin;

use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;

/**
 * Class ProvinceAdmin.
 *
 * @category Admin
 */
class ProvinceAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Province';
    protected $baseRoutePattern = 'administrations/province';
    protected $datagridValues = array(
        '_sort_by' => 'name',
        '_sort_order' => 'asc',
    );

    /**
     * Configure route collection.
     *
     * @param RouteCollection $collection
     */
    protected function configureRoutes(RouteCollection $collection)
    {
        parent::configureRoutes($collection);
        $collection->remove('delete');
    }

    /**
     * @param FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'code',
                null,
                array(
                    'label' => 'backend.admin.province.code',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.province.name',
                )
            )
            ->add(
                'country',
                CountryType::class,
                array(
                    'label' => 'backend.admin.province.country',
                    'preferred_choices' => array('ES'),
                )
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'enabled',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.enabled',
                    'required' => false,
                )
            )
            ->end()
        ;
    }

    /**
     * @param DatagridMapper $datagridMapper
     */
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add(
                'code',
                null,
                array(
                    'label' => 'backend.admin.province.code',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.province.name',
                )
            )
            ->add(
                'country',
                null,
                array(
                    'label' => 'backend.admin.province.country',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'backend.admin.enabled',
                )
            )
        ;
    }

    /**
     * @param ListMapper $listMapper
     */
    protected function configureListFields(ListMapper $listMapper)
    {
        $listMapper
            ->add(
                'code',
                null,
                array(
                    'label' => 'backend.admin.province.code',
                    'editable' => true,
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.province.name',
                    'editable' => true,
                )
            )
            ->add(
                'country',
                null,
                array(
                    'label' => 'backend.admin.province.country',
                    'editable' => false,
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
                    'actions' => array(
                        'edit' => array('template' => 'admin/buttons/list__action_edit_button.html.twig'),
                    ),
                    'label' => 'Accions',
                )
            )
        ;
    }
}
