<?php

namespace App\Form\Type;

use App\Entity\ContactMessage;
use EWZ\Bundle\RecaptchaBundle\Form\Type\EWZRecaptchaV3Type;
use EWZ\Bundle\RecaptchaBundle\Validator\Constraints\IsTrueV3 as RecaptchaTrue;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class ContactMessageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add(
                'name',
                TextType::class,
                [
                    'label' => 'frontend.forms.name',
                    'required' => true,
                    'attr' => [
                        'class' => 'common-fields',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ]
            )
            ->add(
                'email',
                EmailType::class,
                [
                    'label' => 'frontend.forms.email',
                    'required' => true,
                    'attr' => [
                        'class' => 'common-fields',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                        new Assert\Email(),
                    ],
                ]
            )
            ->add(
                'phone',
                TextType::class,
                [
                    'label' => 'frontend.forms.phone',
                    'required' => false,
                    'attr' => [
                        'class' => 'common-fields',
                    ],
                ]
            )
            ->add(
                'message',
                TextareaType::class,
                [
                    'label' => 'frontend.forms.message',
                    'required' => true,
                    'attr' => [
                        'rows' => 5,
                        'class' => 'message-field',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ]
            )
            ->add(
                'privacy',
                CheckboxType::class,
                [
                    'required' => true,
                    'label' => 'frontend.forms.privacy',
                    'mapped' => false,
                ]
            )
            ->add(
                'captcha',
                EWZRecaptchaV3Type::class,
                [
                    'label' => false,
                    'action_name' => 'contact_message',
                    'mapped' => false,
                    'constraints' => [
                        new RecaptchaTrue(),
                    ],
                ]
            )
            ->add(
                'send',
                SubmitType::class,
                [
                    'label' => 'frontend.forms.send',
                    'attr' => [
                        'class' => 'btn btn-violet',
                    ],
                ]
            )
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults(
            [
                'data_class' => ContactMessage::class,
            ]
        );
    }
}
