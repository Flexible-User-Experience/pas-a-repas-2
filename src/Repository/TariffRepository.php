<?php

namespace App\Repository;

use App\Entity\Tariff;
use App\Enum\TariffTypeEnum;
use DateTime;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

/**
 * Class TariffRepository.
 *
 * @category Repository
 */
class TariffRepository extends ServiceEntityRepository
{
    /**
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Tariff::class);
    }

    /**
     * @return QueryBuilder
     */
    public function findAllSortedByYearAndPriceQB()
    {
        return $this->createQueryBuilder('t')
            ->orderBy('t.year', 'DESC')
            ->addOrderBy('t.price', 'ASC')
        ;
    }

    /**
     * @return Query
     */
    public function findAllSortedByYearAndPriceQ()
    {
        return $this->findAllSortedByYearAndPriceQB()->getQuery();
    }

    /**
     * @return array
     */
    public function findAllSortedByYearAndPrice()
    {
        return $this->findAllSortedByYearAndPriceQ()->getResult();
    }

    /**
     * @return QueryBuilder
     */
    public function findCurrentPrivateLessonTariffQB()
    {
        return $this->createQueryBuilder('t')
            ->where('t.type = :type')
            ->setParameter('type', TariffTypeEnum::TARIFF_PRIVATE_LESSON_PER_HOUR)
            ->orderBy('t.year', 'DESC')
            ->setMaxResults(1)
        ;
    }

    /**
     * @return Query
     */
    public function findCurrentPrivateLessonTariffQ()
    {
        return $this->findCurrentPrivateLessonTariffQB()->getQuery();
    }

    /**
     * @return Tariff
     *
     * @throws NonUniqueResultException
     */
    public function findCurrentPrivateLessonTariff()
    {
        $result = $this->findCurrentPrivateLessonTariffQ()->getOneOrNullResult();

        if (is_null($result)) {
            $today = new DateTime();
            $result = new Tariff();
            $result
                ->setName('default empty tariff')
                ->setYear(intval($today->format('Y')))
                ->setType(TariffTypeEnum::TARIFF_PRIVATE_LESSON_PER_HOUR)
                ->setPrice(0)
            ;
        }

        return $result;
    }

    /**
     * @return QueryBuilder
     */
    public function findCurrentSharedPrivateLessonTariffQB()
    {
        return $this->createQueryBuilder('t')
            ->where('t.type = :type')
            ->setParameter('type', TariffTypeEnum::TARIFF_SHARED_PRIVATE_LESSON_PER_HOUR)
            ->orderBy('t.year', 'DESC')
            ->setMaxResults(1)
        ;
    }

    /**
     * @return Query
     */
    public function findCurrentSharedPrivateLessonTariffQ()
    {
        return $this->findCurrentSharedPrivateLessonTariffQB()->getQuery();
    }

    /**
     * @return Tariff
     *
     * @throws NonUniqueResultException
     */
    public function findCurrentSharedPrivateLessonTariff()
    {
        $result = $this->findCurrentSharedPrivateLessonTariffQ()->getOneOrNullResult();

        if (is_null($result)) {
            $today = new \DateTime();
            $result = new Tariff();
            $result
                ->setName('default empty shared tariff')
                ->setYear(intval($today->format('Y')))
                ->setType(TariffTypeEnum::TARIFF_SHARED_PRIVATE_LESSON_PER_HOUR)
                ->setPrice(0)
            ;
        }

        return $result;
    }
}
