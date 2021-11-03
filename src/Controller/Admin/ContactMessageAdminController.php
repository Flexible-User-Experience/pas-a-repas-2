<?php

namespace App\Controller\Admin;

use App\Entity\ContactMessage;
use App\Form\Type\ContactMessageAnswerType;
use Symfony\Component\HttpFoundation\Response;

final class ContactMessageAdminController extends BaseAdminController
{
    public function showAction($deprecatedId = null): Response
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var ContactMessage $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        $object->setChecked(true);
        $this->admin->checkAccess('show', $object);
        $preResponse = $this->preShow($request, $object);
        if (null !== $preResponse) {
            return $preResponse;
        }
        $this->admin->setSubject($object);
        $em = $this->getDoctrine()->getManager();
        $em->persist($object);
        $em->flush();

        return $this->renderWithExtraParams(
            $this->admin->getTemplate('show'),
            array(
                'action' => 'show',
                'object' => $object,
                'elements' => $this->admin->getShow(),
            )
        );
    }

    /**
     * Answer message action.
     */
    public function answerAction(): Response
    {
        $request = $this->getRequest();
        $id = $request->get($this->admin->getIdParameter());
        /** @var ContactMessage $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        $form = $this->createForm(ContactMessageAnswerType::class, $object);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // persist new contact message form record
            $object->setChecked(true);
            $object->setAnswered(true);
            $em = $this->getDoctrine()->getManager();
            $em->persist($object);
            $em->flush();
            // send notifications
            $messenger = $this->get('app.notification');
            $messenger->sendUserBackendNotification($object);
            // build flash message
            $this->addFlash('success', 'Your answer has been sent.');

            return $this->redirectToRoute('admin_app_contactmessage_list');
        }

        return $this->renderWithExtraParams(
            'Admin/ContactMessage/answer_form.html.twig',
            array(
                'action' => 'answer',
                'object' => $object,
                'form' => $form->createView(),
                'elements' => $this->admin->getShow(),
            )
        );
    }
}
