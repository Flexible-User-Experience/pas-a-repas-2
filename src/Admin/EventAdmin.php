<?php

namespace App\Admin;

use App\Entity\ClassGroup;
use App\Entity\Event;
use App\Entity\Student;
use App\Entity\Teacher;
use App\Enum\EventClassroomTypeEnum;
use DateInterval;
use Exception;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\ProxyQueryInterface;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\DoctrineORMAdminBundle\Filter\DateTimeFilter;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class EventAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Timetable';
    protected $baseRoutePattern = 'classrooms/timetable';
    protected $maxPerPage = 400;
    protected $datagridValues = [
        '_sort_by' => 'begin',
        '_sort_order' => 'desc',
        '_per_page' => 400,
    ];

    protected function configureRoutes(RouteCollection $collection): void
    {
        parent::configureRoutes($collection);
        $collection
            ->add('batchedit', $this->getRouterIdParameter().'/batch-edit')
            ->add('batchdelete', $this->getRouterIdParameter().'/batch-delete')
            ->add('apiget', $this->getRouterIdParameter().'/api/get')
            ->remove('delete')
        ;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->with('backend.admin.dates', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'begin',
                DateTimePickerType::class,
                [
                    'label' => 'backend.admin.event.begin',
                    'format' => 'd/M/y H:mm',
                    'required' => true,
                ]
            )
            ->add(
                'end',
                DateTimePickerType::class,
                [
                    'label' => 'backend.admin.event.end',
                    'format' => 'd/M/y H:mm',
                    'required' => true,
                ]
            );
        if (!$this->id($this->getSubject())) {
            $form
                ->add(
                    'dayFrequencyRepeat',
                    null,
                    [
                        'label' => 'backend.admin.event.dayFrequencyRepeat',
                        'required' => false,
                        'help' => 'backend.admin.event.dayFrequencyRepeat_help',
                    ]
                )
                ->add(
                    'until',
                    DateTimePickerType::class,
                    [
                        'label' => 'backend.admin.event.until',
                        'format' => 'd/M/y H:mm',
                        'required' => false,
                    ]
                );
        }
        $form
            ->end()
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'classroom',
                ChoiceType::class,
                [
                    'label' => 'backend.admin.event.classroom',
                    'choices' => EventClassroomTypeEnum::getEnumArray(),
                    'multiple' => false,
                    'expanded' => false,
                    'required' => true,
                ]
            )
            ->add(
                'teacher',
                EntityType::class,
                [
                    'label' => 'backend.admin.event.teacher',
                    'required' => true,
                    'class' => Teacher::class,
                    'choice_label' => 'name',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.teacher_repository')->getEnabledSortedByNameQB(),
                ]
            )
            ->add(
                'group',
                EntityType::class,
                [
                    'label' => 'backend.admin.event.group',
                    'required' => true,
                    'class' => ClassGroup::class,
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.class_group_repository')->getEnabledSortedByCodeQB(),
                ]
            )
            ->end()
            ->with('backend.admin.event.students', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'students',
                EntityType::class,
                [
                    'label' => 'backend.admin.event.students',
                    'required' => false,
                    'multiple' => true,
                    'class' => Student::class,
                    'choice_label' => 'fullCanonicalName',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.student_repository')->getAllSortedBySurnameQB(),
                ]
            )
            ->end()
            ->with('backend.admin.assistance', $this->getFormMdSuccessBoxArray(6))
            ->end()
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'begin',
                DateTimeFilter::class,
                [
                    'label' => 'backend.admin.event.begin',
                    'field_type' => DateTimePickerType::class,
                    'format' => 'd-m-Y H:i',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy HH:mm',
                ]
            )
            ->add(
                'end',
                DateTimeFilter::class,
                [
                    'label' => 'backend.admin.event.end',
                    'field_type' => DateTimePickerType::class,
                    'format' => 'd-m-Y H:i',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy HH:mm',
                ]
            )
            ->add(
                'classroom',
                null,
                [
                    'label' => 'backend.admin.event.classroom',
                ],
                ChoiceType::class,
                [
                    'expanded' => false,
                    'multiple' => false,
                    'choices' => EventClassroomTypeEnum::getEnumArray(),
                ]
            )
            ->add(
                'teacher',
                null,
                [
                    'label' => 'backend.admin.event.teacher',
                ]
            )
            ->add(
                'group',
                null,
                [
                    'label' => 'backend.admin.event.group',
                ]
            )
            ->add(
                'students',
                null,
                [
                    'label' => 'backend.admin.event.students',
                ]
            )
        ;
    }

    public function createQuery($context = 'list'): ProxyQueryInterface
    {
        $queryBuilder = parent::createQuery($context);
        $queryBuilder
            ->andWhere($queryBuilder->getRootAliases()[0].'.enabled = :enabled')
            ->setParameter('enabled', true)
        ;

        return $queryBuilder;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'begin',
                'date',
                [
                    'label' => 'backend.admin.event.begin',
                    'format' => 'd/m/Y H:i',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'end',
                'date',
                [
                    'label' => 'backend.admin.event.end',
                    'format' => 'd/m/Y H:i',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'classroom',
                null,
                [
                    'label' => 'backend.admin.event.classroom',
                    'template' => 'Admin/Cells/list__cell_classroom_type.html.twig',
                ]
            )
            ->add(
                'teacher',
                null,
                [
                    'label' => 'backend.admin.event.teacher',
                    'editable' => false,
                    'associated_property' => 'name',
                    'sortable' => true,
                    'sort_field_mapping' => ['fieldName' => 'name'],
                    'sort_parent_association_mappings' => [['fieldName' => 'teacher']],
                ]
            )
            ->add(
                'group',
                null,
                [
                    'label' => 'backend.admin.event.group',
                    'editable' => true,
                    'sortable' => true,
                    'sort_field_mapping' => ['fieldName' => 'code'],
                    'sort_parent_association_mappings' => [['fieldName' => 'group']],
                ]
            )
            ->add(
                'studentsAmount',
                null,
                [
                    'label' => 'backend.admin.event.students',
                    'template' => 'Admin/Cells/list__cell_classroom_students_amount.html.twig',
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
                        'edit' => ['template' => 'Admin/Buttons/list__action_edit_button.html.twig'],
                        'batchedit' => ['template' => 'Admin/Buttons/list__action_event_batch_edit_button.html.twig'],
                        'batchdelete' => ['template' => 'Admin/Buttons/list__action_batch_delete_button.html.twig'],
                    ],
                    'label' => 'backend.admin.actions',
                ]
            );
    }

    public function getExportFields(): array
    {
        return [
            'beginString',
            'endString',
            'classroomString',
            'teacher',
            'group',
            'studentsAmount',
            'studentsString',
        ];
    }

    /**
     * Create event and all of his sibilings if there is a repeat frequency.
     *
     * @param Event $object
     *
     * @throws Exception
     */
    public function postPersist($object): void
    {
        if ($object->getDayFrequencyRepeat() && $object->getUntil()) {
            $em = $this->getConfigurationPool()->getContainer()->get('doctrine')->getManager();
            $currentBegin = $object->getBegin();
            $currentEnd = $object->getEnd();
            $currentBegin->add(new DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
            $currentEnd->add(new DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
            $previousEvent = $object;
            $found = false;

            while ($currentBegin->format('Y-m-d H:i') <= $object->getUntil()->format('Y-m-d H:i')) {
                $event = new Event();
                $event
                    ->setBegin($currentBegin)
                    ->setEnd($currentEnd)
                    ->setTeacher($previousEvent->getTeacher())
                    ->setClassroom($previousEvent->getClassroom())
                    ->setGroup($previousEvent->getGroup())
                    ->setStudents($previousEvent->getStudents())
                    ->setPrevious($previousEvent)
                ;

                $em->persist($event);
                $em->flush();

                $currentBegin->add(new DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
                $currentEnd->add(new DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
                $previousEvent = $event;
                $found = true;
            }

            if ($found) {
                $previousEvent = $event->getPrevious();
                while (!is_null($previousEvent)) {
                    $previousEvent->setNext($event);
                    $em->flush();
                    $event = $previousEvent;
                    $previousEvent = $previousEvent->getPrevious();
                }
            }
        }
    }
}
