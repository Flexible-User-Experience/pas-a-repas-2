<?php

namespace App\Repository;

use App\Entity\BlogCategory;
use App\Entity\BlogPost;
use DateTimeImmutable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;

final class BlogPostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogPost::class);
    }

    public function getAllEnabledSortedByPublishedDate(): array
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    public function getAllEnabledSortedByPublishedDateWithJoin(): array
    {
        $query = $this->createQueryBuilder('p')
            ->select('p, c')
            ->join('p.categories', 'c')
            ->where('p.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    public function getAllEnabledSortedByPublishedDateWithJoinUntilNowQ(): Query
    {
        $now = new DateTimeImmutable();

        return $this->createQueryBuilder('p')
            ->select('p, c')
            ->join('p.categories', 'c')
            ->where('p.enabled = :enabled')
            ->andWhere('p.publishedAt <= :published')
            ->setParameter('enabled', true)
            ->setParameter('published', $now->format('Y-m-d'))
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();
    }

    public function getAllEnabledSortedByPublishedDateWithJoinUntilNow(): array
    {
        return $this->getAllEnabledSortedByPublishedDateWithJoinUntilNowQ()->getResult();
    }

    public function getPostsByCategoryEnabledSortedByPublishedDate(BlogCategory $category): array
    {
        $query = $this->createQueryBuilder('p')
            ->select('p')
            ->join('p.categories', 'c')
            ->where('p.enabled = :enabled')
            ->andWhere('c.id = :cid')
            ->setParameter('enabled', true)
            ->setParameter('cid', $category->getId())
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    public function getPostsByCategoryEnabledSortedByPublishedDateWithJoin(BlogCategory $category): array
    {
        $query = $this->createQueryBuilder('p')
            ->select('p, c')
            ->join('p.categories', 'c')
            ->where('p.enabled = :enabled')
            ->andWhere('c.id = :cid')
            ->setParameter('enabled', true)
            ->setParameter('cid', $category->getId())
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    public function getPostsByCategoryEnabledSortedByPublishedDateWithJoinUntilNow(BlogCategory $category): array
    {
        $now = new DateTimeImmutable();
        $query = $this->createQueryBuilder('p')
            ->select('p, c')
            ->join('p.categories', 'c')
            ->where('p.enabled = :enabled')
            ->andWhere('c.id = :cid')
            ->andWhere('p.publishedAt <= :published')
            ->setParameter('enabled', true)
            ->setParameter('published', $now->format('Y-m-d'))
            ->setParameter('cid', $category->getId())
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }
}
