<?php

namespace App\Entity;

use App\Entity\Traits\SlugTrait;
use App\Entity\Traits\TitleTrait;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BlogCategoryRepository")
 */
class BlogCategory extends AbstractBase
{
    use TitleTrait;
    use SlugTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Gedmo\Slug(fields={"title"})
     */
    private string $slug;

    /**
     * @ORM\ManyToMany(targetEntity="BlogPost", mappedBy="categories")
     */
    private $posts;

    public function __construct()
    {
        $this->posts = new ArrayCollection();
    }

    public function setPosts(ArrayCollection $posts): self
    {
        $this->posts = $posts;

        return $this;
    }

    public function getPosts()
    {
        return $this->posts;
    }

    public function addPost(BlogPost $post): self
    {
        $this->posts[] = $post;

        return $this;
    }

    public function removePost(BlogPost $post): self
    {
        $this->posts->removeElement($post);

        return $this;
    }

    public function __toString(): string
    {
        return $this->title ? $this->getTitle() : AbstractBase::DEFAULT_NULL_STRING;
    }
}
