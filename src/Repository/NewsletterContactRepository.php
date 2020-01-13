<?php

namespace App\Repository;

use App\Entity\NewsletterContact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class NewsletterContactRepository.
 *
 * @category Repository
 */
class NewsletterContactRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, NewsletterContact::class);
    }
}
