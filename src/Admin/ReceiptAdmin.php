<?php

namespace App\Admin;

use App\Entity\Person;
use App\Entity\Receipt;
use App\Entity\Student;
use App\Enum\InvoiceYearMonthEnum;
use App\Enum\StudentPaymentEnum;
use DateTimeImmutable;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\DoctrineORMAdminBundle\Filter\DateFilter;
use Sonata\DoctrineORMAdminBundle\Filter\ModelAutocompleteFilter;
use Sonata\Form\Type\CollectionType;
use Sonata\Form\Type\DatePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ReceiptAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Receipt';
    protected $baseRoutePattern = 'billings/receipt';
    protected $maxPerPage = 500;
    protected $datagridValues = [
        '_sort_by' => 'id',
        '_sort_order' => 'desc',
        '_per_page' => 500,
    ];
    protected $perPageOptions = [25, 50, 100, 200, 500];

    protected function configureRoutes(RouteCollection $collection): void
    {
        $collection
            ->add('generate')
            ->add('creator')
            ->add('createInvoice', $this->getRouterIdParameter().'/create-invoice')
            ->add('reminder', $this->getRouterIdParameter().'/reminder-pdf')
            ->add('sendReminder', $this->getRouterIdParameter().'/reminder-send')
            ->add('pdf', $this->getRouterIdParameter().'/pdf')
            ->add('send', $this->getRouterIdParameter().'/send')
            ->add('generateDirectDebit', $this->getRouterIdParameter().'/generate-direct-debit-xml')
            ->remove('show')
        ;
    }

    public function configureBatchActions($actions): array
    {
        if ($this->hasRoute('edit') && $this->hasAccess('edit')) {
            $actions['generatereminderspdf'] = [
                'label' => 'backend.admin.receipt_reminder.batch_action',
                'translation_domain' => 'messages',
                'ask_confirmation' => false,
            ];
            $actions['generatefirstsepaxmls'] = [
                'label' => 'backend.admin.receipt.generate_first_sepa_xmls_batch_action',
                'translation_domain' => 'messages',
                'ask_confirmation' => false,
            ];
            $actions['generatesepaxmls'] = [
                'label' => 'backend.admin.receipt.generate_recurrent_sepa_xmls_batch_action',
                'translation_domain' => 'messages',
                'ask_confirmation' => false,
            ];
        }

        return $actions;
    }

    public function getDashboardActions(): array
    {
        $actions = parent::getDashboardActions();
        $actions['generate'] = [
            'label' => 'backend.admin.receipt.generate_batch',
            'translation_domain' => 'messages',
            'url' => $this->generateUrl('generate'),
            'icon' => 'inbox',
        ];

        return $actions;
    }

    protected function configureFormFields(FormMapper $form): void
    {
        $now = new DateTimeImmutable();
        $currentYear = $now->format('Y');
        $form
            ->with('backend.admin.receipt.receipt', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'year',
                ChoiceType::class,
                [
                    'label' => 'backend.admin.invoice.year',
                    'required' => true,
                    'choices' => InvoiceYearMonthEnum::getYearEnumArray(),
                    'preferred_choices' => $currentYear,
                ]
            )
            ->add(
                'month',
                ChoiceType::class,
                [
                    'label' => 'backend.admin.invoice.month',
                    'required' => true,
                    'choices' => InvoiceYearMonthEnum::getMonthEnumArray(),
                ]
            )
            ->add(
                'student',
                EntityType::class,
                [
                    'label' => 'backend.admin.invoice.student',
                    'required' => true,
                    'class' => Student::class,
                    'choice_label' => 'fullCanonicalName',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.student_repository')->getEnabledSortedBySurnameValidTariffQB(),
                ]
            )
            ->add(
                'person',
                EntityType::class,
                [
                    'label' => 'backend.admin.invoice.person',
                    'required' => false,
                    'class' => Person::class,
                    'choice_label' => 'fullCanonicalName',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.parent_repository')->getEnabledSortedBySurnameQB(),
                    'disabled' => true,
                ]
            )
            ->end()
            ->with('backend.admin.invoice.detail', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'date',
                DatePickerType::class,
                [
                    'label' => 'backend.admin.receipt.date',
                    'format' => 'd/M/y',
                    'required' => !$this->id($this->getSubject()),
                    'disabled' => (bool) $this->id($this->getSubject()),
                ]
            )
            ->add(
                'discountApplied',
                null,
                [
                    'label' => 'backend.admin.invoice.discountApplied',
                    'required' => false,
                    'disabled' => true,
                ]
            )
            ->add(
                'baseAmount',
                null,
                [
                    'label' => 'backend.admin.invoice.baseAmount',
                    'required' => false,
                    'disabled' => true,
                ]
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'isForPrivateLessons',
                CheckboxType::class,
                [
                    'label' => 'backend.admin.is_for_private_lessons',
                    'required' => false,
                    'disabled' => false,
                ]
            )
        ;
        if (!$this->id($this->getSubject()) || ($this->id($this->getSubject()) && !$this->getSubject()->getStudent()->isPaymentExempt())) {
            $form
                ->add(
                    'isSepaXmlGenerated',
                    CheckboxType::class,
                    [
                        'label' => 'backend.admin.receipt.isSepaXmlGenerated',
                        'required' => false,
                        'disabled' => true,
                    ]
                )
                ->add(
                    'sepaXmlGeneratedDate',
                    DatePickerType::class,
                    [
                        'label' => 'backend.admin.receipt.sepaXmlGeneratedDate',
                        'format' => 'd/M/y',
                        'required' => false,
                        'disabled' => true,
                    ]
                )
                ->add(
                    'isSended',
                    CheckboxType::class,
                    [
                        'label' => 'backend.admin.receipt.isSended',
                        'required' => false,
                        'disabled' => true,
                    ]
                )
                ->add(
                    'sendDate',
                    DatePickerType::class,
                    [
                        'label' => 'backend.admin.invoice.sendDate',
                        'format' => 'd/M/y',
                        'required' => false,
                        'disabled' => true,
                    ]
                )
                ->add(
                    'isPayed',
                    CheckboxType::class,
                    [
                        'label' => 'backend.admin.receipt.isPayed',
                        'required' => false,
                    ]
                )
                ->add(
                    'paymentDate',
                    DatePickerType::class,
                    [
                        'label' => 'backend.admin.invoice.paymentDate',
                        'format' => 'd/M/y',
                        'required' => false,
                    ]
                )
            ;
        }
        $form->end();
        if ($this->id($this->getSubject())) { // is edit mode, disable on new subjetcs
            $form
                ->with('backend.admin.receipt.lines', $this->getFormMdSuccessBoxArray(12))
                ->add(
                    'lines',
                    CollectionType::class,
                    [
                        'label' => 'backend.admin.invoice.line',
                        'required' => true,
                        'error_bubbling' => true,
                        'by_reference' => false,
                    ],
                    [
                        'edit' => 'inline',
                        'inline' => 'table',
                    ]
                )
                ->end()
            ;
        }
    }

    protected function configureDatagridFilters(DatagridMapper $filter): void
    {
        $filter
            ->add(
                'id',
                null,
                [
                    'label' => 'backend.admin.receipt.id',
                ]
            )
            ->add(
                'date',
                DateFilter::class,
                [
                    'label' => 'backend.admin.receipt.date',
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
                'year',
                null,
                [
                    'label' => 'backend.admin.invoice.year',
                ]
            )
            ->add(
                'month',
                null,
                [
                    'label' => 'backend.admin.invoice.month',
                ],
                ChoiceType::class,
                [
                    'choices' => InvoiceYearMonthEnum::getMonthEnumArray(),
                    'expanded' => false,
                    'multiple' => false,
                ]
            )
            ->add(
                'student',
                ModelAutocompleteFilter::class,
                [
                    'label' => 'backend.admin.invoice.student',
                ],
                null,
                [
                    'class' => Student::class,
                    'property' => ['name', 'surname'],
                ]
            )
            ->add(
                'person',
                ModelAutocompleteFilter::class,
                [
                    'label' => 'backend.admin.invoice.person',
                ],
                null,
                [
                    'class' => Person::class,
                    'property' => ['name', 'surname'],
                ]
            )
            ->add(
                'student.payment',
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
                'discountApplied',
                null,
                [
                    'label' => 'backend.admin.invoice.discountApplied',
                ]
            )
            ->add(
                'baseAmount',
                null,
                [
                    'label' => 'backend.admin.invoice.baseAmount',
                ]
            )
            ->add(
                'isForPrivateLessons',
                null,
                [
                    'label' => 'backend.admin.is_for_private_lessons',
                ]
            )
            ->add(
                'isSepaXmlGenerated',
                null,
                [
                    'label' => 'backend.admin.receipt.isSepaXmlGenerated',
                ]
            )
            ->add(
                'sepaXmlGeneratedDate',
                null,
                [
                    'label' => 'backend.admin.receipt.sepaXmlGeneratedDate',
                ]
            )
            ->add(
                'isSended',
                null,
                [
                    'label' => 'backend.admin.receipt.isSended',
                ]
            )
            ->add(
                'sendDate',
                DateFilter::class,
                [
                    'label' => 'backend.admin.invoice.sendDate',
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
                'isPayed',
                null,
                [
                    'label' => 'backend.admin.receipt.isPayed',
                ]
            )
            ->add(
                'paymentDate',
                DateFilter::class,
                [
                    'label' => 'backend.admin.invoice.paymentDate',
                    'field_type' => DatePickerType::class,
                    'format' => 'd-m-Y',
                ],
                null,
                [
                    'widget' => 'single_text',
                    'format' => 'dd-MM-yyyy',
                ]
            )
        ;
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list
            ->add(
                'id',
                null,
                [
                    'label' => 'backend.admin.receipt.id',
                    'template' => 'Admin/Cells/list__cell_receipt_number.html.twig',
                ]
            )
            ->add(
                'date',
                null,
                [
                    'label' => 'backend.admin.receipt.date',
                    'template' => 'Admin/Cells/list__cell_receipt_date.html.twig',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'year',
                null,
                [
                    'label' => 'backend.admin.invoice.year',
                    'template' => 'Admin/Cells/list__cell_event_year.html.twig',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'month',
                null,
                [
                    'label' => 'backend.admin.invoice.month',
                    'template' => 'Admin/Cells/list__cell_event_month.html.twig',
                ]
            )
            ->add(
                'student',
                null,
                [
                    'label' => 'backend.admin.invoice.student',
                    'editable' => false,
                    'associated_property' => 'fullCanonicalName',
                    'sortable' => true,
                    'sort_field_mapping' => ['fieldName' => 'surname'],
                    'sort_parent_association_mappings' => [['fieldName' => 'student']],
                ]
            )
            ->add(
                'baseAmount',
                null,
                [
                    'label' => 'backend.admin.invoice.baseAmount',
                    'template' => 'Admin/Cells/list__cell_receipt_amount.html.twig',
                    'editable' => false,
                    'header_class' => 'text-right',
                    'row_align' => 'right',
                ]
            )
            ->add(
                'isForPrivateLessons',
                null,
                [
                    'label' => 'backend.admin.is_for_private_lessons',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'isSepaXmlGenerated',
                null,
                [
                    'label' => 'backend.admin.receipt.isSepaXmlGenerated',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'isSended',
                null,
                [
                    'label' => 'backend.admin.receipt.isSended',
                    'editable' => false,
                    'header_class' => 'text-center',
                    'row_align' => 'center',
                ]
            )
            ->add(
                'isPayed',
                null,
                [
                    'label' => 'backend.admin.receipt.isPayed',
                    'editable' => false,
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
                        'reminder' => ['template' => 'Admin/Buttons/list__action_receipt_reminder_button.html.twig'],
                        'sendReminder' => ['template' => 'Admin/Buttons/list__action_receipt_reminder_send_button.html.twig'],
                        'pdf' => ['template' => 'Admin/Buttons/list__action_receipt_pdf_button.html.twig'],
                        'send' => ['template' => 'Admin/Buttons/list__action_receipt_send_button.html.twig'],
                        'createInvoice' => ['template' => 'Admin/Buttons/list__action_receipt_create_invoice_button.html.twig'],
                        'generateDirectDebit' => ['template' => 'Admin/Buttons/list__action_generate_direct_debit_xml_button.html.twig'],
                        'delete' => ['template' => 'Admin/Buttons/list__action_delete_superadmin_button.html.twig'],
                    ],
                    'label' => 'backend.admin.actions',
                ]
            );
    }

    public function getExportFields(): array
    {
        return [
            'receiptNumber',
            'dateString',
            'year',
            'month',
            'student.fullCanonicalName',
            'person.fullCanonicalName',
            'student.paymentString',
            'discountApplied',
            'baseAmountString',
            'isForPrivateLessons',
            'isSepaXmlGenerated',
            'sepaXmlGeneratedDateString',
            'isSended',
            'sendDateString',
            'isPayed',
            'paymentDateString',
        ];
    }

    /**
     * @param Receipt $object
     */
    public function prePersist($object): void
    {
        $this->commonPreActions($object);
    }

    /**
     * @param Receipt $object
     */
    public function preUpdate($object): void
    {
        $this->commonPreActions($object);
    }

    /**
     * @param Receipt $object
     */
    private function commonPreActions($object): void
    {
        if ($object->getStudent()->getParent()) {
            $object->setPerson($object->getStudent()->getParent());
        }
        $object->setBaseAmount($object->calculateTotalBaseAmount());
    }
}
