<?php

namespace App\Repository;

use App\Entity\Receipt;
use App\Entity\Student;
use DateTimeInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

final class ReceiptRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Receipt::class);
    }

    public function findOnePreviousReceiptByStudentYearAndMonthOrNullQB(Student $student, $year, $month): QueryBuilder
    {
        return $this->createQueryBuilder('r')
            ->where('r.student = :student')
            ->andWhere('r.year = :year')
            ->andWhere('r.month = :month')
            ->setParameter('student', $student)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1)
        ;
    }

    public function findOnePreviousReceiptByStudentYearAndMonthOrNullQ(Student $student, $year, $month): Query
    {
        return $this->findOnePreviousReceiptByStudentYearAndMonthOrNullQB($student, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousReceiptByStudentYearAndMonthOrNull(Student $student, $year, $month): ?Receipt
    {
        return $this->findOnePreviousReceiptByStudentYearAndMonthOrNullQ($student, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month): QueryBuilder
    {
        return $this->createQueryBuilder('r')
            ->where('r.student = :student')
            ->andWhere('r.year = :year')
            ->andWhere('r.month = :month')
            ->setParameter('student', $studentId)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1)
        ;
    }

    public function findOnePreviousReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month): Query
    {
        return $this->findOnePreviousReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousReceiptByStudentIdYearAndMonthOrNull($studentId, $year, $month): ?Receipt
    {
        return $this->findOnePreviousReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousGroupLessonsReceiptByStudentYearAndMonthOrNullQB(Student $student, $year, $month): QueryBuilder
    {
        return $this->findOnePreviousReceiptByStudentYearAndMonthOrNullQB($student, $year, $month)
            ->andWhere('r.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', false)
        ;
    }

    public function findOnePreviousGroupLessonsReceiptByStudentYearAndMonthOrNullQ(Student $student, $year, $month): Query
    {
        return $this->findOnePreviousGroupLessonsReceiptByStudentYearAndMonthOrNullQB($student, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousGroupLessonsReceiptByStudentYearAndMonthOrNull(Student $student, $year, $month): ?Receipt
    {
        return $this->findOnePreviousGroupLessonsReceiptByStudentYearAndMonthOrNullQ($student, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousGroupLessonsReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month): QueryBuilder
    {
        return $this->findOnePreviousReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)
            ->andWhere('r.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', false)
        ;
    }

    public function findOnePreviousGroupLessonsReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month): Query
    {
        return $this->findOnePreviousGroupLessonsReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousGroupLessonsReceiptByStudentIdYearAndMonthOrNull($studentId, $year, $month): ?Receipt
    {
        return $this->findOnePreviousGroupLessonsReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousPrivateLessonsReceiptByStudentYearAndMonthOrNullQB(Student $student, $year, $month): QueryBuilder
    {
        return $this->findOnePreviousReceiptByStudentYearAndMonthOrNullQB($student, $year, $month)
            ->andWhere('r.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', true)
        ;
    }

    public function findOnePreviousPrivateLessonsReceiptByStudentYearAndMonthOrNullQ(Student $student, $year, $month): Query
    {
        return $this->findOnePreviousPrivateLessonsReceiptByStudentYearAndMonthOrNullQB($student, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousPrivateLessonsReceiptByStudentYearAndMonthOrNull(Student $student, $year, $month): ?Receipt
    {
        return $this->findOnePreviousPrivateLessonsReceiptByStudentYearAndMonthOrNullQ($student, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousPrivateLessonsReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month): QueryBuilder
    {
        return $this->findOnePreviousReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)
            ->andWhere('r.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', true)
        ;
    }

    public function findOnePreviousPrivateLessonsReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month): Query
    {
        return $this->findOnePreviousPrivateLessonsReceiptByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousPrivateLessonsReceiptByStudentIdYearAndMonthOrNull($studentId, $year, $month): ?Receipt
    {
        return $this->findOnePreviousPrivateLessonsReceiptByStudentIdYearAndMonthOrNullQ($studentId, $year, $month)->getOneOrNullResult();
    }

    public function getAllSortedByNumberDescQB(): QueryBuilder
    {
        return $this->createQueryBuilder('r')->orderBy('r.id', 'DESC');
    }

    public function getAllSortedByNumberDescQ(): Query
    {
        return $this->getAllSortedByNumberDescQB()->getQuery();
    }

    public function getAllSortedByNumberDesc(): array
    {
        return $this->getAllSortedByNumberDescQ()->getResult();
    }

    public function findByIdsArrayQB($ids): QueryBuilder
    {
        return $this->createQueryBuilder('r')
            ->where('r.id IN (:ids)')
            ->setParameter('ids', $ids)
        ;
    }

    public function findByIdsArrayQ($ids): Query
    {
        return $this->findByIdsArrayQB($ids)->getQuery();
    }

    public function findByIdsArray($ids): array
    {
        return $this->findByIdsArrayQ($ids)->getResult();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function getMonthlyIncomingsAmountForDate(DateTimeInterface $date): float
    {
        $query = $this->createQueryBuilder('r')
            ->select('SUM(r.baseAmount) as amount')
            ->where('r.month = :month')
            ->andWhere('r.year = :year')
            ->setParameter('month', (int) $date->format('m'))
            ->setParameter('year', (int) $date->format('Y'))
            ->getQuery()
        ;

        return is_null($query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR)) ? 0 : (float) $query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
    }
}
