<?php

namespace App\Repository;

use App\Entity\ContactMessage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class ContactMessageRepository.
 *
 * @category Repository
 */
class ContactMessageRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContactMessage::class);
    }

    /**
     * @return int
     */
    public function getNotReadMessagesAmount()
    {
        $qb = $this->createQueryBuilder('cm')
            ->where('cm.checked = :checked')
            ->setParameter('checked', false);

        return count($qb->getQuery()->getArrayResult());
    }
}
