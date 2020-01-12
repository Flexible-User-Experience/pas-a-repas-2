<?php

namespace App\Form\Type;

use App\Enum\ReceiptYearMonthEnum;
use App\Form\Model\GenerateReceiptModel;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class GenerateReceiptYearMonthChooserType.
 *
 * @category FormType
 */
class GenerateReceiptYearMonthChooserType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     *
     * @throws \Exception
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'year',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.invoice.year',
                    'required' => true,
                    'choices' => ReceiptYearMonthEnum::getYearEnumArray(),
                )
            )
            ->add(
                'month',
                ChoiceType::class,
                array(
                    'label' => 'backend.admin.invoice.month',
                    'required' => true,
                    'choices' => ReceiptYearMonthEnum::getMonthEnumArray(),
                )
            )
            ->add(
                'preview',
                SubmitType::class,
                array(
                    'label' => 'backend.admin.receipt.preview_invoice',
                    'attr' => array(
                        'class' => 'btn btn-warning',
                    ),
                )
            )
        ;
    }

    /**
     * @return string
     */
    public function getBlockPrefix()
    {
        return 'generate_receipt_year_month_chooser';
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(
            array(
                'data_class' => GenerateReceiptModel::class,
            )
        );
    }
}
