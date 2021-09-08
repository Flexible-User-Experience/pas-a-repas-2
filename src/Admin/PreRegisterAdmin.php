<?php

namespace App\Admin;

use App\Enum\PreRegisterSeasonEnum;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\DoctrineORMAdminBundle\Filter\DateFilter;
use Sonata\Form\Type\DatePickerType;
use Sonata\AdminBundle\Route\RouteCollection;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class PreRegisterAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Preregisters';
    protected $baseRoutePattern = 'students/pre-register';
    protected $datagridValues = array(
        '_sort_by' => 'createdAt',
        '_sort_order' => 'desc',
    );

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection
            ->add('student', $this->getRouterIdParameter().'/create-student')
            ->remove('create')
            ->remove('edit')
        ;
    }

    public function configureBatchActions($actions): array
    {
        if ($this->hasRoute('show') && $this->hasAccess('show')) {
            $actions['generatestudents'] = array(
                'label' => 'backend.admin.pre_register.batch_action',
                'translation_domain' => 'messages',
                'ask_confirmation' => false,
            );
        }

        return $actions;
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'createdAt',
                DateFilter::class,
                array(
                    'label' => 'frontend.forms.preregister.date',
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
                'season',
                null,
                array(
                    'label' => 'frontend.forms.preregister.season',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ),
                ChoiceType::class,
                array(
                    'choices' => PreRegisterSeasonEnum::getEnumArray(),
                    'expanded' => false,
                    'multiple' => false,
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'frontend.forms.preregister.name',
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'frontend.forms.preregister.surname',
                )
            )
            ->add(
                'phone',
                null,
                array(
                    'label' => 'frontend.forms.preregister.phone',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'frontend.forms.preregister.email',
                )
            )
            ->add(
                'age',
                null,
                array(
                    'label' => 'frontend.forms.preregister.age',
                )
            )
            ->add(
                'courseLevel',
                null,
                array(
                    'label' => 'frontend.forms.preregister.course_level',
                )
            )
            ->add(
                'preferredTimetable',
                null,
                array(
                    'label' => 'frontend.forms.preregister.preferred_timetable',
                )
            )
            ->add(
                'previousAcademy',
                null,
                array(
                    'label' => 'frontend.forms.preregister.previous_academy',
                )
            )
            ->add(
                'comments',
                null,
                array(
                    'label' => 'frontend.forms.preregister.comments',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'frontend.forms.preregister.enabled',
                )
            )
        ;
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show
            ->add(
                'createdAt',
                null,
                array(
                    'label' => 'frontend.forms.preregister.date',
                    'format' => 'd/m/Y H:i'
                )
            )
            ->add(
                'season',
                null,
                array(
                    'label' => 'frontend.forms.preregister.season',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'frontend.forms.preregister.name',
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'frontend.forms.preregister.surname',
                )
            )
            ->add(
                'phone',
                null,
                array(
                    'label' => 'frontend.forms.preregister.phone',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'frontend.forms.preregister.email',
                )
            )
            ->add(
                'age',
                null,
                array(
                    'label' => 'frontend.forms.preregister.age',
                )
            )
            ->add(
                'courseLevel',
                null,
                array(
                    'label' => 'frontend.forms.preregister.course_level',
                )
            )
            ->add(
                'preferredTimetable',
                null,
                array(
                    'label' => 'frontend.forms.preregister.preferred_timetable',
                )
            )
            ->add(
                'previousAcademy',
                null,
                array(
                    'label' => 'frontend.forms.preregister.previous_academy',
                )
            )
            ->add(
                'comments',
                null,
                array(
                    'label' => 'frontend.forms.preregister.comments',
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'frontend.forms.preregister.enabled',
                )
            )
        ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'createdAt',
                null,
                array(
                    'label' => 'frontend.forms.preregister.date',
                    'editable' => false,
                    'format' => 'd/m/Y H:i'
                )
            )
            ->add(
                'season',
                null,
                array(
                    'label' => 'frontend.forms.preregister.season',
                    'template' => 'Admin/Cells/list__cell_pre_register_season.html.twig',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'frontend.forms.preregister.name',
                    'editable' => false,
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'frontend.forms.preregister.surname',
                    'editable' => false,
                )
            )
            ->add(
                'phone',
                null,
                array(
                    'label' => 'frontend.forms.preregister.phone',
                    'editable' => false,
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'frontend.forms.preregister.email',
                    'editable' => false,
                )
            )
            ->add(
                'enabled',
                null,
                array(
                    'label' => 'frontend.forms.preregister.enabled',
                    'editable' => false,
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'actions' => array(
                        'show' => array('template' => 'Admin/Buttons/list__action_show_button.html.twig'),
                        'student' => array('template' => 'Admin/Buttons/list__action_create_student_from_pre_register_button.html.twig'),
                        'delete' => array('template' => 'Admin/Buttons/list__action_delete_button.html.twig'),
                    ),
                    'label' => 'Accions',
                )
            )
        ;
    }

    public function getExportFields(): array
    {
        return array(
            'createdAtString',
            'seasonString',
            'name',
            'surname',
            'phone',
            'email',
            'age',
            'courseLevel',
            'preferredTimetable',
            'previousAcademy',
            'comments',
            'enabled',
        );
    }
}
