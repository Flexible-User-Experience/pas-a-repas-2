<?php

namespace App\Repository;

use App\Entity\NewsletterContact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class NewsletterContactRepository.
 *
 * @category Repository
 */
class NewsletterContactRepository extends ServiceEntityRepository
{
    /**
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, NewsletterContact::class);
    }
}
