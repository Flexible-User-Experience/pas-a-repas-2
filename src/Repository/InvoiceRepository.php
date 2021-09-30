<?php

namespace App\Repository;

use App\Entity\Invoice;
use App\Entity\Student;
use DateTimeInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

final class InvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invoice::class);
    }

    public function findOnePreviousInvoiceByStudentYearAndMonthOrNullQB(Student $student, $year, $month): QueryBuilder
    {
        return $this->createQueryBuilder('i')
            ->where('i.student = :student')
            ->andWhere('i.year = :year')
            ->andWhere('i.month = :month')
            ->setParameter('student', $student)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1)
        ;
    }

    public function findOnePreviousInvoiceByStudentYearAndMonthOrNullQ(Student $student, $year, $month): Query
    {
        return $this->findOnePreviousInvoiceByStudentYearAndMonthOrNullQB($student, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousInvoiceByStudentYearAndMonthOrNull(Student $student, $year, $month): ?Invoice
    {
        return $this->findOnePreviousInvoiceByStudentYearAndMonthOrNullQ($student, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQB($studentId, $year, $month): QueryBuilder
    {
        return $this->createQueryBuilder('i')
            ->where('i.student = :student')
            ->andWhere('i.year = :year')
            ->andWhere('i.month = :month')
            ->setParameter('student', $studentId)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1)
        ;
    }

    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQ($studentId, $year, $month): Query
    {
        return $this->findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)->getQuery();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNull($studentId, $year, $month): ?Invoice
    {
        return $this->findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQ($studentId, $year, $month)->getOneOrNullResult();
    }

    /**
     * @throws NonUniqueResultException
     */
    public function getMonthlyIncomingsAmountForDate(DateTimeInterface $date)
    {
        $begin = clone $date;
        $end = clone $date;
        $begin->modify('first day of this month');
        $end->modify('last day of this month');
        $query = $this->createQueryBuilder('i')
            ->select('SUM(i.baseAmount) as amount')
            ->where('i.date >= :begin')
            ->andWhere('i.date <= :end')
            ->setParameter('begin', $begin->format('Y-m-d'))
            ->setParameter('end', $end->format('Y-m-d'))
            ->getQuery()
        ;

        return is_null($query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR)) ? 0 : (float) $query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
    }
}
