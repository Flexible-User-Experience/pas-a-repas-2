<?php

namespace App\Controller\Admin;

use App\Entity\Spending;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;
use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

final class SpendingAdminController extends CRUDController
{
    public function duplicateAction(Request $request, EntityManagerInterface $em): Response
    {
        $this->assertObjectExists($request, true);
        $id = $request->get($this->admin->getIdParameter());
        /** @var Spending $object */
        $object = $this->admin->getObject($id);
        if (!$object) {
            throw $this->createNotFoundException(sprintf('unable to find the object with id: %s', $id));
        }
        // new spending
        $newSpending = new Spending();
        $newSpending
            ->setDate(new DateTimeImmutable())
            ->setCategory($object->getCategory())
            ->setProvider($object->getProvider())
            ->setDescription($object->getDescription())
            ->setBaseAmount($object->getBaseAmount())
            ->setIsPayed(false)
            ->setPaymentMethod($object->getPaymentMethod())
        ;
        $em->persist($newSpending);
        $em->flush();
        $this->addFlash('success', 'S\'ha duplicat la despesa núm. '.$object->getId().' amb la factura núm. '.$newSpending->getId().' correctament.');

        return $this->redirectToList();
    }
}
