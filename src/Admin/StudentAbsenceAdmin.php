<?php

namespace App\Admin;

use App\Entity\Student;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\Form\Type\DatePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

/**
 * Class StudentAbsenceAdmin.
 *
 * @category Admin
 */
class StudentAbsenceAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Absence';
    protected $baseRoutePattern = 'students/absence';
    protected $datagridValues = array(
        '_sort_by' => 'day',
        '_sort_order' => 'desc',
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
            ->add('notification', $this->getRouterIdParameter().'/notification')
            ->remove('delete')
        ;
    }

    /**
     * @param FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'day',
                DatePickerType::class,
                array(
                    'label' => 'backend.admin.teacher_absence.day',
                    'format' => 'd/M/y',
                    'required' => true,
                )
            )
            ->add(
                'student',
                EntityType::class,
                array(
                    'label' => 'backend.admin.student.student',
                    'required' => true,
                    'class' => Student::class,
                    'choice_label' => 'getFullCanonicalName',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.student_repository')->getEnabledSortedBySurnameQB(),
                )
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'hasBeenNotified',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.student.has_been_notified',
                    'required' => false,
                    'disabled' => true,
                )
            )
            ->add(
                'notificationDate',
                DatePickerType::class,
                array(
                    'label' => 'backend.admin.student.notification_date',
                    'format' => 'd/M/y H:m',
                    'required' => false,
                    'disabled' => true,
                )
            )
            ->end()
        ;
    }

    /**
     * @param DatagridMapper $datagridMapper
     */
    protected function configureDatagridFilters(DatagridMapper $datagridMapper): void
    {
        $datagridMapper
            ->add(
                'day',
                'doctrine_orm_date',
                array(
                    'label' => 'backend.admin.teacher_absence.day',
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
                'student',
                null,
                array(
                    'label' => 'backend.admin.student.student',
                )
            )
            ->add(
                'hasBeenNotified',
                null,
                array(
                    'label' => 'backend.admin.student.has_been_notified',
                    'editable' => false,
                )
            )
            ->add(
                'notificationDate',
                null,
                array(
                    'label' => 'backend.admin.student.notification_date',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ),
                null,
                array(
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy',
                )
            )
        ;
    }

    /**
     * @param ListMapper $listMapper
     */
    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper
            ->add(
                'student',
                null,
                array(
                    'label' => 'backend.admin.student.student',
                    'editable' => false,
                    'associated_property' => 'getFullCanonicalName',
                    'sortable' => true,
                    'sort_field_mapping' => array('fieldName' => 'name'),
                    'sort_parent_association_mappings' => array(array('fieldName' => 'student')),
                )
            )
            ->add(
                'day',
                'date',
                array(
                    'label' => 'backend.admin.teacher_absence.day',
                    'format' => 'd/m/Y',
                    'editable' => true,
                )
            )
            ->add(
                'hasBeenNotified',
                null,
                array(
                    'label' => 'backend.admin.student.has_been_notified',
                    'editable' => false,
                )
            )
            ->add(
                'notificationDate',
                'date',
                array(
                    'label' => 'backend.admin.student.notification_date',
                    'format' => 'd/m/Y H:i',
                    'editable' => false,
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'actions' => array(
                        'edit' => array('template' => 'Admin/Buttons/list__action_edit_button.html.twig'),
                        'notification' => array('template' => 'Admin/Buttons/list__action_student_absence_notification_button.html.twig'),
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
            'dayString',
            'student',
        );
    }
}
