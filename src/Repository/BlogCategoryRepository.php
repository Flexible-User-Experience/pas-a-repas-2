<?php

namespace App\Repository;

use App\Entity\BlogCategory;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry as RegistryInterface;
use Doctrine\ORM\Query;
use Doctrine\ORM\QueryBuilder;

/**
 * Class BlogCategoryRepository
 *
 * @category Repository
 */
class BlogCategoryRepository extends ServiceEntityRepository
{
    /**
     * Constructor.
     *
     * @param RegistryInterface $registry
     */
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, BlogCategory::class);
    }

    /**
     * @return QueryBuilder
     */
    public function getAllSortedByTitleQB()
    {
        return $this->createQueryBuilder('c')
            ->orderBy('c.title', 'ASC');
    }

    /**
     * @return Query
     */
    public function getAllSortedByTitleQ()
    {
        return $this->getAllSortedByTitleQB()->getQuery();
    }

    /**
     * @return ArrayCollection
     */
    public function getAllSortedByTitle()
    {
        return $this->getAllSortedByTitleQ()->getResult();
    }

    /**
     * @return ArrayCollection
     */
    public function getAllEnabledSortedByTitle()
    {
        $query = $this->createQueryBuilder('c')
            ->where('c.enabled = :enabled')
            ->setParameter('enabled', true)
            ->orderBy('c.title', 'ASC')
            ->getQuery();

        return $query->getResult();
    }

    /**
     * @return ArrayCollection
     */
    public function getAllEnabledSortedByTitleWithJoin()
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
