<?php

namespace App\Entity;

use App\Entity\Traits\SlugTrait;
use App\Entity\Traits\TitleTrait;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Class BlogCategory.
 *
 * @category Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\BlogCategoryRepository")
 */
class BlogCategory extends AbstractBase
{
    use TitleTrait;
    use SlugTrait;

    /**
     * @var ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="BlogPost", mappedBy="categories")
     */
    private $posts;

    /**
     * Methods.
     */

    /**
     * BlogCategory constructor.
     */
    public function __construct()
    {
        $this->posts = new ArrayCollection();
    }

    /**
     * @param ArrayCollection $posts
     *
     * @return $this
     */
    public function setPosts(ArrayCollection $posts)
    {
        $this->posts = $posts;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getPosts()
    {
        return $this->posts;
    }

    /**
     * @param BlogPost $post
     *
     * @return $this
     */
    public function addPost(BlogPost $post)
    {
        $this->posts[] = $post;

        return $this;
    }

    /**
     * @param BlogPost $post
     *
     * @return $this
     */
    public function removePost(BlogPost $post)
    {
        $this->posts->removeElement($post);

        return $this;
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->title ? $this->getTitle() : '---';
    }
}
