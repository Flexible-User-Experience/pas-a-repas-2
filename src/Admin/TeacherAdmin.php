<?php

namespace App\Admin;

use App\Enum\TeacherColorEnum;
use Ivory\CKEditorBundle\Form\Type\CKEditorType;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

/**
 * Class TeacherAdmin.
 *
 * @category Admin
 */
class TeacherAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Teacher';
    protected $baseRoutePattern = 'teachers/teacher';
    protected $datagridValues = array(
        '_sort_by' => 'position',
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
        $collection
            ->remove('delete')
            ->add('detail', $this->getRouterIdParameter().'/detail')
        ;
    }

    /**
     * @param FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('backend.admin.image', $this->getFormMdSuccessBoxArray(4))
            ->add(
                'imageFile',
                'file',
                array(
                    'label' => 'backend.admin.image',
                    'help' => $this->getImageHelperFormMapperWithThumbnailAspectRatio(),
                    'required' => false,
                )
            )
            ->end()
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.teacher.name',
                )
            )
            ->add(
                'description',
                CKEditorType::class,
                array(
                    'label' => 'backend.admin.description',
                    'config_name' => 'my_config',
                )
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(2))
            ->add(
                'position',
                null,
                array(
                    'label' => 'backend.admin.position',
                )
            )
            ->add(
                'color',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.teacher.color',
                    'choices' => TeacherColorEnum::getEnumArray(),
                    'multiple' => false,
                    'expanded' => false,
                    'required' => true,
                )
            )
            ->add(
                'showInHomepage',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.teacher.showInHomepage',
                    'required' => false,
                )
            )
            ->add(
                'enabled',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.enabled',
                    'required' => false,
                )
            )
            ->end();
    }

    /**
     * @param DatagridMapper $datagridMapper
     */
    protected function configureDatagridFilters(DatagridMapper $datagridMapper)
    {
        $datagridMapper
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.teacher.name',
                )
            )
            ->add(
                'description',
                null,
                array(
                    'label' => 'backend.admin.description',
                )
            )
            ->add(
                'showInHomepage',
                null,
                array(
                    'label' => 'backend.admin.teacher.showInHomepage',
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
                'position',
                'decimal',
                array(
                    'label' => 'backend.admin.position',
                    'editable' => true,
                )
            )
            ->add(
                'image',
                null,
                array(
                    'label' => 'backend.admin.image',
                    'template' => 'admin/cells/list__cell_image_field.html.twig',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.teacher.name',
                    'editable' => true,
                )
            )
            ->add(
                'color',
                null,
                array(
                    'label' => 'backend.admin.teacher.color',
                    'template' => 'admin/cells/list__cell_teacher_color.html.twig',
                )
            )
            ->add(
                'showInHomepage',
                null,
                array(
                    'label' => 'backend.admin.teacher.showInHomepage',
                    'editable' => true,
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
                        'detail' => array(
                            'template' => 'admin/cells/list__action_teacher_detail.html.twig',
                        ),
                    ),
                    'label' => 'backend.admin.actions',
                )
            )
        ;
    }

    /**
     * @return array
     */
    public function getExportFields()
    {
        return array(
            'name',
            'position',
            'color',
            'description',
            'showInHomepage',
            'enabled',
        );
    }
}
