<?php

namespace App\Repository;

use App\Entity\ClassGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class ClassGroupRepository.
 *
 * @category Repository
 */
class ClassGroupRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClassGroup::class);
    }

    /**
     * @return QueryBuilder
     */
    public function getEnabledSortedByCodeQB()
    {
        return $this->createQueryBuilder('cg')
            ->where('cg.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('cg.code', 'ASC')
        ;
    }

    /**
     * @return Query
     */
    public function getEnabledSortedByCodeQ()
    {
        return $this->getEnabledSortedByCodeQB()->getQuery();
    }

    /**
     * @return array
     */
    public function getEnabledSortedByCode()
    {
        return $this->getEnabledSortedByCodeQ()->getResult();
    }
}
