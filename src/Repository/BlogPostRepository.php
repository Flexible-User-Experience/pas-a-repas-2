<?php

namespace App\Repository;

use App\Entity\BlogCategory;
use App\Entity\BlogPost;
use DateTimeImmutable;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry as RegistryInterface;
use Doctrine\ORM\Query;

/**
 * Class PostRepository
 *
 * @category Repository
 */
class BlogPostRepository extends ServiceEntityRepository
{
    /**
     * Constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, BlogPost::class);
    }

    /**
     * @return array
     */
    public function getAllEnabledSortedByPublishedDate()
    {
        $query = $this->createQueryBuilder('p')
            ->where('p.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('p.publishedAt', 'DESC')
            ->addOrderBy('p.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    /**
     * @return array
     */
    public function getAllEnabledSortedByPublishedDateWithJoin()
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

    /**
     * @param BlogCategory $category
     *
     * @return array
     */
    public function getPostsByCategoryEnabledSortedByPublishedDate(BlogCategory $category)
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

    /**
     * @param BlogCategory $category
     *
     * @return array
     */
    public function getPostsByCategoryEnabledSortedByPublishedDateWithJoin(BlogCategory $category)
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

    /**
     * @param BlogCategory $category
     *
     * @return array
     */
    public function getPostsByCategoryEnabledSortedByPublishedDateWithJoinUntilNow(BlogCategory $category)
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
