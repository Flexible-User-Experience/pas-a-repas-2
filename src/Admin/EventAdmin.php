<?php

namespace App\Admin;

use App\Entity\ClassGroup;
use App\Entity\Event;
use App\Entity\Student;
use App\Entity\Teacher;
use App\Enum\EventClassroomTypeEnum;
use Doctrine\ORM\QueryBuilder;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

/**
 * Class EventAdmin.
 *
 * @category Admin
 */
class EventAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Timetable';
    protected $baseRoutePattern = 'classrooms/timetable';
    protected $maxPerPage = 400;
    protected $datagridValues = array(
        '_sort_by' => 'begin',
        '_sort_order' => 'desc',
        '_per_page' => 400,
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
            ->add('batchedit', $this->getRouterIdParameter().'/batch-edit')
            ->add('batchdelete', $this->getRouterIdParameter().'/batch-delete')
            ->remove('delete')
        ;
    }

    /**
     * @param FormMapper $formMapper
     */
    protected function configureFormFields(FormMapper $formMapper)
    {
        $formMapper
            ->with('backend.admin.dates', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'begin',
                DateTimePickerType::class,
                array(
                    'label' => 'backend.admin.event.begin',
                    'format' => 'd/M/y H:mm',
                    'required' => true,
                )
            )
            ->add(
                'end',
                DateTimePickerType::class,
                array(
                    'label' => 'backend.admin.event.end',
                    'format' => 'd/M/y H:mm',
                    'required' => true,
                )
            );
        if (is_null($this->getSubject()->getId())) {
            $formMapper
                ->add(
                    'dayFrequencyRepeat',
                    null,
                    array(
                        'label' => 'backend.admin.event.dayFrequencyRepeat',
                        'required' => false,
                        'help' => 'backend.admin.event.dayFrequencyRepeat_help',
                    )
                )
                ->add(
                    'until',
                    DateTimePickerType::class,
                    array(
                        'label' => 'backend.admin.event.until',
                        'format' => 'd/M/y H:mm',
                        'required' => false,
                    )
                );
        }
        $formMapper
            ->end()
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'classroom',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.event.classroom',
                    'choices' => EventClassroomTypeEnum::getEnumArray(),
                    'multiple' => false,
                    'expanded' => false,
                    'required' => true,
                )
            )
            ->add(
                'teacher',
                EntityType::class,
                array(
                    'label' => 'backend.admin.event.teacher',
                    'required' => true,
                    'class' => Teacher::class,
                    'choice_label' => 'name',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.teacher_repository')->getEnabledSortedByNameQB(),
                )
            )
            ->add(
                'group',
                EntityType::class,
                array(
                    'label' => 'backend.admin.event.group',
                    'required' => true,
                    'class' => ClassGroup::class,
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.class_group_repository')->getEnabledSortedByCodeQB(),
                )
            )
            ->end()
            ->with('backend.admin.event.students', $this->getFormMdSuccessBoxArray(6))
            ->add(
                'students',
                EntityType::class,
                array(
                    'label' => 'backend.admin.event.students',
                    'required' => false,
                    'multiple' => true,
                    'class' => Student::class,
                    'choice_label' => 'fullCanonicalName',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.student_repository')->getAllSortedBySurnameQB(),
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
                'begin',
                'doctrine_orm_datetime',
                array(
                    'label' => 'backend.admin.event.begin',
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
                'end',
                'doctrine_orm_datetime',
                array(
                    'label' => 'backend.admin.event.end',
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
                'classroom',
                null,
                array(
                    'label' => 'backend.admin.event.classroom',
                ),
                ChoiceType::class,
                array(
                    'expanded' => false,
                    'multiple' => false,
                    'choices' => EventClassroomTypeEnum::getEnumArray(),
                )
            )
            ->add(
                'teacher',
                null,
                array(
                    'label' => 'backend.admin.event.teacher',
                )
            )
            ->add(
                'group',
                null,
                array(
                    'label' => 'backend.admin.event.group',
                )
            )
            ->add(
                'students',
                null,
                array(
                    'label' => 'backend.admin.event.students',
                )
            )
        ;
    }

    /**
     * @param string $context
     *
     * @return QueryBuilder
     */
    public function createQuery($context = 'list')
    {
        /** @var QueryBuilder $queryBuilder */
        $queryBuilder = parent::createQuery($context);
        $queryBuilder
            ->andWhere($queryBuilder->getRootAliases()[0].'.enabled = :enabled')
            ->setParameter('enabled', true)
        ;

        return $queryBuilder;
    }

    /**
     * @param ListMapper $listMapper
     */
    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper
            ->add(
                'begin',
                'date',
                array(
                    'label' => 'backend.admin.event.begin',
                    'format' => 'd/m/Y H:i',
                    'editable' => false,
                )
            )
            ->add(
                'end',
                'date',
                array(
                    'label' => 'backend.admin.event.end',
                    'format' => 'd/m/Y H:i',
                    'editable' => false,
                )
            )
            ->add(
                'classroom',
                null,
                array(
                    'label' => 'backend.admin.event.classroom',
                    'template' => 'Admin/Cells/list__cell_classroom_type.html.twig',
                )
            )
            ->add(
                'teacher',
                null,
                array(
                    'label' => 'backend.admin.event.teacher',
                    'editable' => false,
                    'associated_property' => 'name',
                    'sortable' => true,
                    'sort_field_mapping' => array('fieldName' => 'name'),
                    'sort_parent_association_mappings' => array(array('fieldName' => 'teacher')),
                )
            )
            ->add(
                'group',
                null,
                array(
                    'label' => 'backend.admin.event.group',
                    'editable' => true,
                    'sortable' => true,
                    'sort_field_mapping' => array('fieldName' => 'code'),
                    'sort_parent_association_mappings' => array(array('fieldName' => 'group')),
                )
            )
            ->add(
                'studentsAmount',
                null,
                array(
                    'label' => 'backend.admin.event.students',
                    'template' => 'Admin/Cells/list__cell_classroom_students_amount.html.twig',
                )
            )
            ->add(
                '_action',
                'actions',
                array(
                    'actions' => array(
                        'edit' => array('template' => 'Admin/Buttons/list__action_edit_button.html.twig'),
                        'batchedit' => array('template' => 'Admin/Buttons/list__action_event_batch_edit_button.html.twig'),
                        'batchdelete' => array('template' => 'Admin/Buttons/list__action_batch_delete_button.html.twig'),
                    ),
                    'label' => 'backend.admin.actions',
                )
            );
    }

    /**
     * @return array
     */
    public function getExportFields()
    {
        return array(
            'beginString',
            'endString',
            'classroomString',
            'teacher',
            'group',
            'studentsAmount',
            'studentsString',
        );
    }

    /**
     * Create event and all of his sibilings if there is a repeat frequency.
     *
     * @param Event $object
     *
     * @throws \Exception
     */
    public function postPersist($object)
    {
        if ($object->getDayFrequencyRepeat() && $object->getUntil()) {
            $em = $this->getConfigurationPool()->getContainer()->get('doctrine')->getManager();
            $currentBegin = $object->getBegin();
            $currentEnd = $object->getEnd();
            $currentBegin->add(new \DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
            $currentEnd->add(new \DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
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

                $currentBegin->add(new \DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
                $currentEnd->add(new \DateInterval('P'.$object->getDayFrequencyRepeat().'D'));
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
