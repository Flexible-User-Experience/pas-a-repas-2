<?php

namespace App\Repository;

use App\Entity\BlogCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

final class BlogCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogCategory::class);
    }

    public function getAllSortedByTitleQB(): QueryBuilder
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.title', 'ASC');
    }

    public function getAllSortedByTitleQ(): Query
    {
        return $this->getAllSortedByTitleQB()->getQuery();
    }

    public function getAllSortedByTitle(): array
    {
        return $this->getAllSortedByTitleQ()->getResult();
    }

    public function getAllEnabledSortedByTitle(): array
    {
        $query = $this->createQueryBuilder('c')
            ->where('c.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('c.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    public function getAllEnabledSortedByTitleWithJoin(): array
    {
        $query = $this->createQueryBuilder('c')
            ->select('c, p')
            ->join('c.posts', 'p')
            ->where('c.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('c.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }
}
