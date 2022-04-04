<?php

namespace App\Repository;

use App\Entity\Invoice;
use App\Entity\Student;
use DateTimeInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\AbstractQuery;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

final class InvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invoice::class);
    }

    public function findOnePreviousInvoiceByStudentYearAndMonthOrNullQB(Student $student, int $year, int $month): QueryBuilder
    {
        return $this->createQueryBuilder('i')
            ->where('i.student = :student')
            ->andWhere('i.year = :year')
            ->andWhere('i.month = :month')
            ->setParameter('student', $student)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1);
    }

    public function findOnePreviousInvoiceByStudentYearAndMonthOrNullQ(Student $student, int $year, int $month): Query
    {
        return $this->findOnePreviousInvoiceByStudentYearAndMonthOrNullQB($student, $year, $month)->getQuery();
    }

    public function findOnePreviousInvoiceByStudentYearAndMonthOrNull(Student $student, int $year, int $month): ?Invoice
    {
        return $this->findOnePreviousInvoiceByStudentYearAndMonthOrNullQ($student, $year, $month)->getOneOrNullResult();
    }

    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQB(int $studentId, int $year, int $month): QueryBuilder
    {
        return $this->createQueryBuilder('i')
            ->join('i.student', 's')
            ->where('s.id = :student')
            ->andWhere('i.year = :year')
            ->andWhere('i.month = :month')
            ->setParameter('student', $studentId)
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setMaxResults(1);
    }

    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQ(int $studentId, int $year, int $month): Query
    {
        return $this->findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQB($studentId, $year, $month)->getQuery();
    }

    public function findOnePreviousInvoiceByStudentIdYearAndMonthOrNull(int $studentId, int $year, int $month): ?Invoice
    {
        return $this->findOnePreviousInvoiceByStudentIdYearAndMonthOrNullQ($studentId, $year, $month)->getOneOrNullResult();
    }

    public function getMonthlyIncomingsAmountForDate(DateTimeInterface $date): int
    {
        $query = $this->createQueryBuilder('i')
            ->select('SUM(i.baseAmount) as amount')
            ->where('i.month = :month')
            ->andWhere('i.year = :year')
            ->setParameter('month', (int) $date->format('m'))
            ->setParameter('year', (int) $date->format('Y'))
            ->getQuery()
        ;

        return is_null($query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR)) ? 0 : (int) $query->getOneOrNullResult(AbstractQuery::HYDRATE_SINGLE_SCALAR);
    }
}
