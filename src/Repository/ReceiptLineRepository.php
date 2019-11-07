<?php

namespace App\Repository;

use App\Entity\ReceiptLine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class ReceiptLineRepository.
 *
 * @category Repository
 */
class ReceiptLineRepository extends ServiceEntityRepository
{
    /**
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ReceiptLine::class);
    }
}
