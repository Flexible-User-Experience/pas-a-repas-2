<?php

namespace App\Repository;

use App\Entity\ClassGroup;
use App\Entity\PreRegister;
use App\Entity\Student;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

final class StudentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Student::class);
    }

    public function getEnabledSortedByNameQB(): QueryBuilder
    {
        return $this->getAllSortedByNameQB()
            ->where('s.enabled = :enabled')
            ->setParameter('enabled', true)
        ;
    }

    public function getEnabledSortedByNameQ(): Query
    {
        return $this->getEnabledSortedByNameQB()->getQuery();
    }

    public function getEnabledSortedByName(): array
    {
        return $this->getEnabledSortedByNameQ()->getResult();
    }

    public function getAllSortedByNameQB(): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.name', 'ASC')
            ->addOrderBy('s.surname', 'ASC')
        ;
    }

    public function getAllSortedByNameQ(): Query
    {
        return $this->getAllSortedByNameQB()->getQuery();
    }

    public function getAllSortedByName(): array
    {
        return $this->getAllSortedByNameQ()->getResult();
    }

    public function getEnabledSortedBySurnameQB(): QueryBuilder
    {
        return $this->getAllSortedBySurnameQB()
            ->where('s.enabled = :enabled')
            ->setParameter('enabled', true)
        ;
    }

    public function getEnabledSortedBySurnameQ(): Query
    {
        return $this->getEnabledSortedBySurnameQB()->getQuery();
    }

    public function getEnabledSortedBySurname(): array
    {
        return $this->getEnabledSortedBySurnameQ()->getResult();
    }

    public function getAllSortedBySurnameQB(): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->orderBy('s.surname', 'ASC')
            ->addOrderBy('s.name', 'ASC')
        ;
    }

    public function getAllSortedBySurnameQ(): Query
    {
        return $this->getAllSortedBySurnameQB()->getQuery();
    }

    public function getAllSortedBySurname(): array
    {
        return $this->getAllSortedBySurnameQ()->getResult();
    }

    public function getEnabledSortedBySurnameValidTariffQB(): QueryBuilder
    {
        return $this->getEnabledSortedBySurnameQB()->andWhere('s.tariff IS NOT NULL');
    }

    public function getEnabledSortedBySurnameValidTariffQ(): Query
    {
        return $this->getEnabledSortedBySurnameValidTariffQB()->getQuery();
    }

    public function getEnabledSortedBySurnameWithValidTariff(): array
    {
        return $this->getEnabledSortedBySurnameValidTariffQ()->getResult();
    }

    public function getStudentsInEventsByYearAndMonthQB($year, $month): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->join('s.events', 'e')
            ->join('e.group', 'cg')
            ->where('YEAR(e.begin) = :year')
            ->andWhere('MONTH(e.begin) = :month')
            ->andWhere('e.enabled = :enabled')
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->setParameter('enabled', true)
        ;
    }

    public function getStudentsInEventsByYearAndMonthQ($year, $month): Query
    {
        return $this->getStudentsInEventsByYearAndMonthQB($year, $month)->getQuery();
    }

    public function getStudentsInEventsByYearAndMonth($year, $month): array
    {
        return $this->getStudentsInEventsByYearAndMonthQ($year, $month)->getResult();
    }

    public function getStudentsInEventsByYearAndMonthSortedBySurnameQB($year, $month): QueryBuilder
    {
        return $this->getStudentsInEventsByYearAndMonthQB($year, $month)
            ->orderBy('s.surname', 'ASC')
            ->addOrderBy('s.name', 'ASC')
        ;
    }

    public function getStudentsInEventsByYearAndMonthSortedBySurnameQ($year, $month): Query
    {
        return $this->getStudentsInEventsByYearAndMonthSortedBySurnameQB($year, $month)->getQuery();
    }

    public function getStudentsInEventsByYearAndMonthSortedBySurname($year, $month): array
    {
        return $this->getStudentsInEventsByYearAndMonthSortedBySurnameQ($year, $month)->getResult();
    }

    public function getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month): QueryBuilder
    {
        return $this->getStudentsInEventsByYearAndMonthSortedBySurnameQB($year, $month)
            ->andWhere('s.tariff IS NOT NULL')
            ->andWhere('s.isPaymentExempt = :exempt')
            ->setParameter('exempt', false)
        ;
    }

    public function getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month): Query
    {
        return $this->getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month)->getQuery();
    }

    public function getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariff($year, $month): array
    {
        return $this->getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month)->getResult();
    }

    public function getPrivateLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month): QueryBuilder
    {
        return $this->getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month)
            ->andWhere('cg.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', true)
        ;
    }

    public function getPrivateLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month): Query
    {
        return $this->getPrivateLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month)->getQuery();
    }

    public function getPrivateLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariff($year, $month): array
    {
        return $this->getPrivateLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month)->getResult();
    }

    public function getGroupLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month): QueryBuilder
    {
        return $this->getStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month)
            ->andWhere('cg.isForPrivateLessons = :isForPrivateLessons')
            ->setParameter('isForPrivateLessons', false)
        ;
    }

    public function getGroupLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month): Query
    {
        return $this->getGroupLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQB($year, $month)->getQuery();
    }

    public function getGroupLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariff($year, $month): array
    {
        return $this->getGroupLessonStudentsInEventsForYearAndMonthSortedBySurnameWithValidTariffQ($year, $month)->getResult();
    }

    public function getStudentsInClassGroupQB(ClassGroup $classGroup): QueryBuilder
    {
        return $this->createQueryBuilder('s')
            ->join('s.events', 'e')
            ->join('e.group', 'cg')
            ->where('cg.id = :id')
            ->setParameter('id', $classGroup->getId());
    }

    public function getStudentsInClassGroupQ(ClassGroup $classGroup): Query
    {
        return $this->getStudentsInClassGroupQB($classGroup)->getQuery();
    }

    public function getStudentsInClassGroup(ClassGroup $classGroup): array
    {
        return $this->getStudentsInClassGroupQ($classGroup)->getResult();
    }

    public function getStudentsInClassGroupSortedByNameQB(ClassGroup $classGroup): QueryBuilder
    {
        return $this->getStudentsInClassGroupQB($classGroup)
            ->orderBy('s.surname')
            ->addOrderBy('s.name');
    }

    public function getStudentsInClassGroupSortedByNameQ(ClassGroup $classGroup): Query
    {
        return $this->getStudentsInClassGroupSortedByNameQB($classGroup)->getQuery();
    }

    public function getStudentsInClassGroupSortedByName(ClassGroup $classGroup): array
    {
        return $this->getStudentsInClassGroupSortedByNameQ($classGroup)->getResult();
    }

    public function getPreviouslyStoredStudentsFromPreRegisterQB(PreRegister $preRegister): QueryBuilder
    {
        return $this->getAllSortedBySurnameQB()
            ->where('s.name = :name')
            ->andWhere('s.surname = :surname')
            ->setParameter('name', $preRegister->getName())
            ->setParameter('surname', $preRegister->getSurname());
    }

    public function getPreviouslyStoredStudentsFromPreRegisterQ(PreRegister $preRegister): Query
    {
        return $this->getPreviouslyStoredStudentsFromPreRegisterQB($preRegister)->getQuery();
    }

    public function getPreviouslyStoredStudentsFromPreRegister(PreRegister $preRegister): array
    {
        return $this->getPreviouslyStoredStudentsFromPreRegisterQ($preRegister)->getResult();
    }
}
