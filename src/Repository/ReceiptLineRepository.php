<?php

namespace App\Repository;

use App\Entity\ReceiptLine;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class ReceiptLineRepository.
 *
 * @category Repository
 */
class ReceiptLineRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReceiptLine::class);
    }
}
