<?php

namespace App\Repository;

use App\Entity\Teacher;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class TeacherRepository.
 *
 * @category Repository
 */
class TeacherRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Teacher::class);
    }

    /**
     * @return QueryBuilder
     */
    public function findAllEnabledSortedByPositionQB()
    {
        $query = $this
            ->createQueryBuilder('t')
            ->where('t.enabled = :enabled')
            ->setParameter('enabled', true)
            ->andWhere('t.showInHomepage = :showInHomepage')
            ->setParameter('showInHomepage', true)
            ->orderBy('t.position', 'ASC');

        return $query;
    }

    /**
     * @return Query
     */
    public function findAllEnabledSortedByPositionQ()
    {
        return $this->findAllEnabledSortedByPositionQB()->getQuery();
    }

    /**
     * @return array
     */
    public function findAllEnabledSortedByPosition()
    {
        return $this->findAllEnabledSortedByPositionQ()->getResult();
    }

    /**
     * @return QueryBuilder
     */
    public function getEnabledSortedByNameQB()
    {
        return $this
            ->createQueryBuilder('t')
            ->where('t.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('t.name', 'ASC')
        ;
    }

    /**
     * @return Query
     */
    public function getEnabledSortedByNameQ()
    {
        return $this->getEnabledSortedByNameQB()->getQuery();
    }

    /**
     * @return array
     */
    public function getEnabledSortedByName()
    {
        return $this->getEnabledSortedByNameQ()->getResult();
    }
}
