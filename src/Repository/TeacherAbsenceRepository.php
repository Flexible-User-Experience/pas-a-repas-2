<?php

namespace App\Repository;

use App\Entity\Teacher;
use App\Entity\TeacherAbsence;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * Class TeacherAbsenceRepository.
 *
 * @category Repository
 */
class TeacherAbsenceRepository extends ServiceEntityRepository
{
    /**
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TeacherAbsence::class);
    }

    /**
     * @param Teacher $teacher
     *
     * @return QueryBuilder
     */
    public function getTeacherAbsencesSortedByDateQB(Teacher $teacher)
    {
        return $this->createQueryBuilder('ta')
            ->where('ta.teacher = :teacher')
            ->setParameter('teacher', $teacher)
            ->orderBy('ta.day', 'DESC')
            ->addOrderBy('ta.type', 'ASC');
    }

    /**
     * @param Teacher $teacher
     *
     * @return Query
     */
    public function getTeacherAbsencesSortedByDateQ(Teacher $teacher)
    {
        return $this->getTeacherAbsencesSortedByDateQB($teacher)->getQuery();
    }

    /**
     * @param Teacher $teacher
     *
     * @return array
     */
    public function getTeacherAbsencesSortedByDate(Teacher $teacher)
    {
        return $this->getTeacherAbsencesSortedByDateQ($teacher)->getResult();
    }

    /**
     * @param \DateTime $startDate
     * @param \DateTime $endDate
     *
     * @return QueryBuilder
     */
    public function getFilteredByBeginAndEndQB(\DateTime $startDate, \DateTime $endDate)
    {
        return $this->createQueryBuilder('ta')
            ->where('ta.day BETWEEN :startDate AND :endDate')
            ->setParameter('startDate', $startDate->format('Y-m-d H:i:s'))
            ->setParameter('endDate', $endDate->format('Y-m-d H:i:s'));
    }

    /**
     * @param \DateTime $startDate
     * @param \DateTime $endDate
     *
     * @return Query
     */
    public function getFilteredByBeginAndEndQ(\DateTime $startDate, \DateTime $endDate)
    {
        return $this->getFilteredByBeginAndEndQB($startDate, $endDate)->getQuery();
    }

    /**
     * @param \DateTime $startDate
     * @param \DateTime $endDate
     *
     * @return array
     */
    public function getFilteredByBeginAndEnd(\DateTime $startDate, \DateTime $endDate)
    {
        return $this->getFilteredByBeginAndEndQ($startDate, $endDate)->getResult();
    }
}
