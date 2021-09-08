<?php

namespace App\Admin;

use App\Entity\City;
use App\Entity\ClassGroup;
use App\Entity\Invoice;
use App\Entity\Person;
use App\Entity\Receipt;
use App\Entity\Student;
use App\Entity\Tariff;
use App\Enum\SchoolYearChoicesGeneratorEnum;
use App\Enum\StudentAgesEnum;
use App\Enum\StudentPaymentEnum;
use DateTime;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\AdminType;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\DoctrineORMAdminBundle\Filter\CallbackFilter;
use Sonata\DoctrineORMAdminBundle\Filter\DateFilter;
use Sonata\DoctrineORMAdminBundle\Filter\ModelAutocompleteFilter;
use Sonata\Form\Type\DatePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class StudentAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Student';
    protected $baseRoutePattern = 'students/student';
    protected $datagridValues = [
        '_sort_by' => 'surname',
        '_sort_order' => 'asc',
    ];

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection
            ->add('imagerights', $this->getRouterIdParameter().'/image-rights')
            ->add('sepaagreement', $this->getRouterIdParameter().'/sepa-agreement')
            ->remove('batch')
        ;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $form
            ->with('backend.admin.general', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'name',
                null,
                [
                    'label' => 'backend.admin.student.name',
                ]
            )
            ->add(
                'surname',
                null,
                [
                    'label' => 'backend.admin.student.surname',
                ]
            )
            ->add(
                'parent',
                EntityType::class,
                [
                    'label' => 'backend.admin.student.parent',
                    'required' => false,
                    'class' => Person::class,
                    'choice_label' => 'fullcanonicalname',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.parent_repository')->getEnabledSortedBySurnameQB(),
                ]
            )
            ->add(
                'comments',
                TextareaType::class,
                [
                    'label' => 'backend.admin.student.comments',
                    'required' => false,
                    'attr' => [
                        'rows' => 8,
                        'style' => 'resize:vertical',
                    ],
                ]
            )
            ->end()
            ->with('backend.admin.contact.contact', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'phone',
                null,
                [
                    'label' => 'backend.admin.student.phone',
                ]
            )
            ->add(
                'email',
                null,
                [
                    'label' => 'backend.admin.student.email',
                    'required' => false,
                ]
            )
            ->add(
                'address',
                null,
                [
                    'label' => 'backend.admin.student.address',
                    'required' => false,
                ]
            )
            ->add(
                'city',
                EntityType::class,
                [
                    'label' => 'backend.admin.student.city',
                    'required' => true,
                    'class' => City::class,
                    'choice_label' => 'name',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.city_repository')->getEnabledSortedByNameQB(),
                ]
            )
            ->end()
            ->with('backend.admin.student.payment_information', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'payment',
                ChoiceType::class,
                [
                    'label' => 'backend.admin.student.payment',
                    'choices' => StudentPaymentEnum::getEnumArray(),
                    'multiple' => false,
                    'expanded' => false,
                    'required' => true,
                    'help' => 'backend.admin.student.payment_no_parent_help',
                ]
            )
            ->add(
                'bank',
                AdminType::class,
                [
                    'label' => ' ',
                    'required' => false,
                    'btn_add' => false,
                    'by_reference' => false,
                ]
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'dni',
                null,
                [
                    'label' => 'backend.admin.student.dni',
                    'required' => false,
                ]
            )
            ->add(
                'birthDate',
                DatePickerType::class,
                [
                    'label' => 'backend.admin.student.birthDate',
                    'format' => 'd/M/y',
                ]
            )
            ->add(
                'dischargeDate',
                DatePickerType::class,
                [
                    'label' => 'backend.admin.student.dischargeDate',
                    'format' => 'd/M/y',
                    'required' => false,
                ]
            )
            ->add(
                'schedule',
                null,
                [
                    'label' => 'backend.admin.student.schedule',
                ]
            )
            ->add(
                'tariff',
                EntityType::class,
                [
                    'label' => 'backend.admin.student.tariff',
                    'required' => true,
                    'class' => Tariff::class,
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.tariff_repository')->findAllSortedByYearAndPriceQB(),
                ]
            )
            ->add(
                'hasImageRightsAccepted',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                    'required' => false,
                ]
            )
            ->add(
                'hasSepaAgreementAccepted',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                    'required' => false,
                ]
            )
            ->add(
                'isPaymentExempt',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.student.is_payment_excempt',
                    'required' => false,
                ]
            )
            ->add(
                'hasAcceptedInternalRegulations',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.internalregulations.checkbox_label',
                    'required' => false,
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
        ;
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'dni',
                null,
                [
                    'label' => 'backend.admin.student.dni',
                ]
            )
            ->add(
                'name',
                null,
                [
                    'label' => 'backend.admin.student.name',
                ]
            )
            ->add(
                'surname',
                null,
                [
                    'label' => 'backend.admin.student.surname',
                ]
            )
            ->add(
                'parent',
                ModelAutocompleteFilter::class,
                [
                    'label' => 'backend.admin.student.parent',
                ],
                null,
                [
                    'class' => Person::class,
                    'property' => ['name', 'surname'],
                ]
            )
            ->add(
                'comments',
                null,
                [
                    'label' => 'backend.admin.student.comments',
                ]
            )
            ->add(
                'phone',
                null,
                [
                    'label' => 'backend.admin.student.phone',
                ]
            )
            ->add(
                'email',
                null,
                [
                    'label' => 'backend.admin.student.email',
                ]
            )
            ->add(
                'address',
                null,
                [
                    'label' => 'backend.admin.student.address',
                ]
            )
            ->add(
                'city',
                null,
                [
                    'label' => 'backend.admin.student.city',
                ]
            )
            ->add(
                'payment',
                null,
                [
                    'label' => 'backend.admin.parent.payment',
                ],
                ChoiceType::class,
                [
                    'choices' => StudentPaymentEnum::getEnumArray(),
                    'expanded' => false,
                    'multiple' => false,
                ]
            )
            ->add(
                'events.group',
                null,
                [
                    'label' => 'backend.admin.event.group',
                ],
                EntityType::class,
                [
                    'class' => ClassGroup::class,
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.class_group_repository')->getEnabledSortedByCodeQB(),
                ]
            )
            ->add(
                'schoolYear',
                CallbackFilter::class,
                [
                    'label' => 'backend.admin.class_group.school_year',
                    'callback' => [$this, 'buildDatagridSchoolYearFilter'],
                    'required' => true,
                ],
                ChoiceType::class,
                [
                    'choices' => SchoolYearChoicesGeneratorEnum::getSchoolYearChoicesArray(),
                    'expanded' => false,
                    'multiple' => false,
                ]
            )
            ->add(
                'age',
                CallbackFilter::class,
                [
                    'label' => 'backend.admin.student.age',
                    'callback' => [$this, 'buildDatagridAgesFilter'],
                    'required' => true,
                ],
                ChoiceType::class,
                [
                    'choices' => StudentAgesEnum::getReversedEnumTranslatedArray(),
                    'expanded' => false,
                    'multiple' => false,
                ]
            )
            ->add(
                'birthDate',
                DateFilter::class,
                [
                    'label' => 'backend.admin.student.birthDate',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy',
                ]
            )
            ->add(
                'dischargeDate',
                DateFilter::class,
                [
                    'label' => 'backend.admin.student.dischargeDate',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy',
                ]
            )
            ->add(
                'schedule',
                null,
                [
                    'label' => 'backend.admin.student.schedule',
                ]
            )
            ->add(
                'tariff',
                null,
                [
                    'label' => 'backend.admin.student.tariff',
                ]
            )
            ->add(
                'hasImageRightsAccepted',
                null,
                [
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                ]
            )
            ->add(
                'hasSepaAgreementAccepted',
                null,
                [
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                ]
            )
            ->add(
                'isPaymentExempt',
                null,
                [
                    'label' => 'backend.admin.student.is_payment_excempt',
                ]
            )
            ->add(
                'hasAcceptedInternalRegulations',
                null,
                [
                    'label' => 'backend.admin.internalregulations.checkbox_label',
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

    public function buildDatagridSchoolYearFilter($queryBuilder, $alias, $field, $value): bool
    {
        if ($value && array_key_exists('value', $value)) {
            $schoolYear = (int) $value['value'];
            $begin = new DateTime();
            $begin->setDate($schoolYear, 8, 31);
            $begin->setTime(0, 0);
            $end = new DateTime();
            $end->setDate($schoolYear + 1, 9, 1);
            $end->setTime(0, 0);
            $queryBuilder->join($alias.'.events', 'e');
            $queryBuilder->andWhere('e.begin > :begin');
            $queryBuilder->andWhere('e.begin < :end');
            $queryBuilder->setParameter('begin', $begin);
            $queryBuilder->setParameter('end', $end);

            return true;
        }

        return false;
    }

    public function buildDatagridAgesFilter($queryBuilder, $alias, $field, $value): bool
    {
        if ($value && array_key_exists('value', $value)) {
            $age = (int) $value['value'];
            if ($age < StudentAgesEnum::AGE_20_plus) {
                $queryBuilder->andWhere('TIMESTAMPDIFF(year, '.$alias.'.birthDate, NOW()) = :age');
            } else {
                $queryBuilder->andWhere('TIMESTAMPDIFF(year, '.$alias.'.birthDate, NOW()) >= :age');
            }
            $queryBuilder->setParameter('age', $age);

            return true;
        }

        return false;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'name',
                null,
                [
                    'label' => 'backend.admin.student.name',
                    'editable' => true,
                ]
            )
            ->add(
                'surname',
                null,
                [
                    'label' => 'backend.admin.student.surname',
                    'editable' => true,
                ]
            )
            ->add(
                'phone',
                null,
                [
                    'label' => 'backend.admin.student.phone',
                    'editable' => true,
                ]
            )
            ->add(
                'email',
                null,
                [
                    'label' => 'backend.admin.student.email',
                    'editable' => true,
                ]
            )
            ->add(
                'hasImageRightsAccepted',
                null,
                [
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'hasSepaAgreementAccepted',
                null,
                [
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'hasAcceptedInternalRegulations',
                null,
                [
                    'label' => 'backend.admin.internalregulations.checkbox_label',
                    'editable' => true,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
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
                        'edit' => ['template' => 'Admin/Buttons/list__action_edit_button.html.twig'],
                        'show' => ['template' => 'Admin/Buttons/list__action_show_button.html.twig'],
                        'imagerights' => ['template' => 'Admin/Cells/list__action_image_rights.html.twig'],
                        'sepaagreement' => ['template' => 'Admin/Cells/list__action_sepa_agreement.html.twig'],
                        'delete' => ['template' => 'Admin/Buttons/list__action_delete_student_button.html.twig'],
                    ],
                    'label' => 'backend.admin.actions',
                ]
            )
        ;
    }

    public function getExportFields(): array
    {
        return [
            'dni',
            'name',
            'surname',
            'parent.fullCanonicalName',
            'comments',
            'phone',
            'email',
            'address',
            'city',
            'paymentString',
            'bank.name',
            'bank.swiftCode',
            'bank.accountNumber',
            'birthDateString',
            'dischargeDateString',
            'schedule',
            'tariff',
            'hasImageRightsAccepted',
            'hasSepaAgreementAccepted',
            'hasAcceptedInternalRegulations',
            'enabled',
        ];
    }

    public function preRemove($object): void
    {
        $relatedReceipts = $this->getModelManager()->findBy(Receipt::class, [
            'student' => $object,
        ]);
        /** @var Receipt $relatedReceipt */
        foreach ($relatedReceipts as $relatedReceipt) {
            $this->getModelManager()->delete($relatedReceipt);
        }
        $relatedInvoices = $this->getModelManager()->findBy(Invoice::class, [
            'student' => $object,
        ]);
        /** @var Invoice $relatedInvoice */
        foreach ($relatedInvoices as $relatedInvoice) {
            $this->getModelManager()->delete($relatedInvoice);
        }
    }

    /**
     * @param Student $object
     */
    public function prePersist($object): void
    {
        $this->commonPreActions($object);
    }

    /**
     * @param Student $object
     */
    public function preUpdate($object): void
    {
        $this->commonPreActions($object);
    }

    private function commonPreActions($object): void
    {
        if ($object->getBank()->getAccountNumber()) {
            $object->getBank()->setAccountNumber(strtoupper($object->getBank()->getAccountNumber()));
        }
        if ($object->getBank()->getSwiftCode()) {
            $object->getBank()->setSwiftCode(strtoupper($object->getBank()->getSwiftCode()));
        }
    }
}
