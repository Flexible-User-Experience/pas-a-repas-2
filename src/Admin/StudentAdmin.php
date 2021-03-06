<?php

namespace App\Admin;

use App\Entity\City;
use App\Entity\Invoice;
use App\Entity\Person;
use App\Entity\Receipt;
use App\Entity\Student;
use App\Entity\Tariff;
use App\Enum\StudentPaymentEnum;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\AdminBundle\Form\Type\AdminType;
use Sonata\AdminBundle\Route\RouteCollection;
use Sonata\DoctrineORMAdminBundle\Filter\ModelAutocompleteFilter;
use Sonata\Form\Type\DatePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

/**
 * Class StudentAdmin.
 *
 * @category Admin
 */
class StudentAdmin extends AbstractBaseAdmin
{
    protected $classnameLabel = 'Student';
    protected $baseRoutePattern = 'students/student';
    protected $datagridValues = array(
        '_sort_by' => 'surname',
        '_sort_order' => 'asc',
    );

    /**
     * Configure route collection.
     *
     * @param RouteCollection $collection
     */
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection
            ->add('imagerights', $this->getRouterIdParameter().'/image-rights')
            ->add('sepaagreement', $this->getRouterIdParameter().'/sepa-agreement')
            ->remove('batch')
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
                'name',
                null,
                array(
                    'label' => 'backend.admin.student.name',
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'backend.admin.student.surname',
                )
            )
            ->add(
                'parent',
                EntityType::class,
                array(
                    'label' => 'backend.admin.student.parent',
                    'required' => false,
                    'class' => Person::class,
                    'choice_label' => 'fullcanonicalname',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.parent_repository')->getEnabledSortedBySurnameQB(),
                )
            )
            ->add(
                'comments',
                TextareaType::class,
                array(
                    'label' => 'backend.admin.student.comments',
                    'required' => false,
                    'attr' => array(
                        'rows' => 8,
                        'style' => 'resize:vertical',
                    ),
                )
            )
            ->end()
            ->with('backend.admin.contact.contact', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'phone',
                null,
                array(
                    'label' => 'backend.admin.student.phone',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.student.email',
                    'required' => false,
                )
            )
            ->add(
                'address',
                null,
                array(
                    'label' => 'backend.admin.student.address',
                    'required' => false,
                )
            )
            ->add(
                'city',
                EntityType::class,
                array(
                    'label' => 'backend.admin.student.city',
                    'required' => true,
                    'class' => City::class,
                    'choice_label' => 'name',
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.city_repository')->getEnabledSortedByNameQB(),
                )
            )
            ->end()
            ->with('backend.admin.student.payment_information', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'payment',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.student.payment',
                    'choices' => StudentPaymentEnum::getEnumArray(),
                    'multiple' => false,
                    'expanded' => false,
                    'required' => true,
                    'help' => 'backend.admin.student.payment_no_parent_help',
                )
            )
            ->add(
                'bank',
                AdminType::class,
                array(
                    'label' => ' ',
                    'required' => false,
                    'btn_add' => false,
                    'by_reference' => false,
                )
            )
            ->end()
            ->with('backend.admin.controls', $this->getFormMdSuccessBoxArray(3))
            ->add(
                'dni',
                null,
                array(
                    'label' => 'backend.admin.student.dni',
                    'required' => false,
                )
            )
            ->add(
                'birthDate',
                DatePickerType::class,
                array(
                    'label' => 'backend.admin.student.birthDate',
                    'format' => 'd/M/y',
                )
            )
            ->add(
                'dischargeDate',
                DatePickerType::class,
                array(
                    'label' => 'backend.admin.student.dischargeDate',
                    'format' => 'd/M/y',
                    'required' => false,
                )
            )
            ->add(
                'schedule',
                null,
                array(
                    'label' => 'backend.admin.student.schedule',
                )
            )
            ->add(
                'tariff',
                EntityType::class,
                array(
                    'label' => 'backend.admin.student.tariff',
                    'required' => true,
                    'class' => Tariff::class,
                    'query_builder' => $this->getConfigurationPool()->getContainer()->get('app.tariff_repository')->findAllSortedByYearAndPriceQB(),
                )
            )
            ->add(
                'hasImageRightsAccepted',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                    'required' => false,
                )
            )
            ->add(
                'hasSepaAgreementAccepted',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                    'required' => false,
                )
            )
            ->add(
                'isPaymentExempt',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.student.is_payment_excempt',
                    'required' => false,
                )
            )
            ->add(
                'hasAcceptedInternalRegulations',
                CheckboxType::class,
                array(
                    'label' => 'backend.admin.internalregulations.checkbox_label',
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
                'dni',
                null,
                array(
                    'label' => 'backend.admin.student.dni',
                )
            )
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.student.name',
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'backend.admin.student.surname',
                )
            )
            ->add(
                'parent',
                ModelAutocompleteFilter::class,
                array(
                    'label' => 'backend.admin.student.parent',
                ),
                null,
                array(
                    'class' => Person::class,
                    'property' => array('name', 'surname'),
                )
            )
            ->add(
                'comments',
                null,
                array(
                    'label' => 'backend.admin.student.comments',
                )
            )
            ->add(
                'phone',
                null,
                array(
                    'label' => 'backend.admin.student.phone',
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.student.email',
                )
            )
            ->add(
                'address',
                null,
                array(
                    'label' => 'backend.admin.student.address',
                )
            )
            ->add(
                'city',
                null,
                array(
                    'label' => 'backend.admin.student.city',
                )
            )
            ->add(
                'payment',
                null,
                array(
                    'label' => 'backend.admin.parent.payment',
                ),
                ChoiceType::class,
                array(
                    'choices' => StudentPaymentEnum::getEnumArray(),
                    'expanded' => false,
                    'multiple' => false,
                )
            )
            ->add(
                'bank.name',
                null,
                array(
                    'label' => 'backend.admin.bank.name',
                )
            )
            ->add(
                'bank.swiftCode',
                null,
                array(
                    'label' => 'backend.admin.bank.swiftCode',
                )
            )
            ->add(
                'bank.accountNumber',
                null,
                array(
                    'label' => 'IBAN',
                )
            )
            ->add(
                'birthDate',
                'doctrine_orm_date',
                array(
                    'label' => 'backend.admin.student.birthDate',
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
                'dischargeDate',
                'doctrine_orm_date',
                array(
                    'label' => 'backend.admin.student.dischargeDate',
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
                'schedule',
                null,
                array(
                    'label' => 'backend.admin.student.schedule',
                )
            )
            ->add(
                'tariff',
                null,
                array(
                    'label' => 'backend.admin.student.tariff',
                )
            )
            ->add(
                'hasImageRightsAccepted',
                null,
                array(
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                )
            )
            ->add(
                'hasSepaAgreementAccepted',
                null,
                array(
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                )
            )
            ->add(
                'isPaymentExempt',
                null,
                array(
                    'label' => 'backend.admin.student.is_payment_excempt',
                )
            )
            ->add(
                'hasAcceptedInternalRegulations',
                null,
                array(
                    'label' => 'backend.admin.internalregulations.checkbox_label',
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
    protected function configureListFields(ListMapper $listMapper): void
    {
        $listMapper
            ->add(
                'name',
                null,
                array(
                    'label' => 'backend.admin.student.name',
                    'editable' => true,
                )
            )
            ->add(
                'surname',
                null,
                array(
                    'label' => 'backend.admin.student.surname',
                    'editable' => true,
                )
            )
            ->add(
                'phone',
                null,
                array(
                    'label' => 'backend.admin.student.phone',
                    'editable' => true,
                )
            )
            ->add(
                'email',
                null,
                array(
                    'label' => 'backend.admin.student.email',
                    'editable' => true,
                )
            )
            ->add(
                'hasImageRightsAccepted',
                null,
                array(
                    'label' => 'backend.admin.imagerigths.checkbox_label',
                    'editable' => true,
                )
            )
            ->add(
                'hasSepaAgreementAccepted',
                null,
                array(
                    'label' => 'backend.admin.sepaagreement.checkbox_label',
                    'editable' => true,
                )
            )
            ->add(
                'hasAcceptedInternalRegulations',
                null,
                array(
                    'label' => 'backend.admin.internalregulations.checkbox_label',
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
                        'edit' => array('template' => 'Admin/Buttons/list__action_edit_button.html.twig'),
                        'show' => array('template' => 'Admin/Buttons/list__action_show_button.html.twig'),
                        'imagerights' => array('template' => 'Admin/Cells/list__action_image_rights.html.twig'),
                        'sepaagreement' => array('template' => 'Admin/Cells/list__action_sepa_agreement.html.twig'),
                        'delete' => array('template' => 'Admin/Buttons/list__action_delete_student_button.html.twig'),
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
        );
    }

    /**
     * @param Student $object
     */
    public function preRemove($object)
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
    public function prePersist($object)
    {
        $this->commonPreActions($object);
    }

    /**
     * @param Student $object
     */
    public function preUpdate($object)
    {
        $this->commonPreActions($object);
    }

    /**
     * @param Student $object
     */
    private function commonPreActions($object)
    {
        if ($object->getBank()->getAccountNumber()) {
            $object->getBank()->setAccountNumber(strtoupper($object->getBank()->getAccountNumber()));
        }
        if ($object->getBank()->getSwiftCode()) {
            $object->getBank()->setSwiftCode(strtoupper($object->getBank()->getSwiftCode()));
        }
    }
}
