<?php

namespace App\Form\Type;

use App\Entity\ClassGroup;
use App\Entity\Event;
use App\Entity\Student;
use App\Entity\Teacher;
use App\Enum\EventClassroomTypeEnum;
use App\Manager\EventManager;
use App\Repository\ClassGroupRepository;
use App\Repository\StudentRepository;
use App\Repository\TeacherRepository;
use Sonata\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class EventType.
 *
 * @category FormType
 */
class EventType extends AbstractType
{
    /**
     * @var TeacherRepository
     */
    private $tr;

    /**
     * @var ClassGroupRepository
     */
    private $cgr;

    /**
     * @var StudentRepository
     */
    private $sr;

    /**
     * @var EventManager
     */
    private $em;

    /**
     * Methods.
     */

    /**
     * EventType constructor.
     *
     * @param TeacherRepository    $tr
     * @param ClassGroupRepository $cgr
     * @param StudentRepository    $sr
     * @param EventManager         $em
     */
    public function __construct(TeacherRepository $tr, ClassGroupRepository $cgr, StudentRepository $sr, EventManager $em)
    {
        $this->tr = $tr;
        $this->cgr = $cgr;
        $this->sr = $sr;
        $this->em = $em;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        /** @var Event $event */
        $event = $options['event'];
        $builder
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
            )
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
                    'query_builder' => $this->tr->getEnabledSortedByNameQB(),
                )
            )
            ->add(
                'group',
                EntityType::class,
                array(
                    'label' => 'backend.admin.event.group',
                    'required' => true,
                    'class' => ClassGroup::class,
                    'query_builder' => $this->cgr->getEnabledSortedByCodeQB(),
                )
            )
            ->add(
                'students',
                EntityType::class,
                array(
                    'label' => 'backend.admin.event.students',
                    'required' => false,
                    'multiple' => true,
                    'class' => Student::class,
                    'choice_label' => 'fullCanonicalName',
                    'query_builder' => $this->sr->getAllSortedBySurnameQB(),
                )
            )
            ->add(
                'range',
                ChoiceType::class,
                array(
                    'mapped' => false,
                    'label' => 'backend.admin.event.range',
                    'required' => true,
                    'choices' => $this->em->getRangeChoicesArrayFlip($event),
                    'data' => $this->em->getLastEventOf($event)->getId(),
                )
            )
        ;
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => Event::class,
                'event' => null,
            )
        );
    }
}
