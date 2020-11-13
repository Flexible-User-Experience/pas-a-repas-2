<?php

namespace App\Entity;

use App\Entity\Traits\DescriptionTrait;
use App\Entity\Traits\ImageTrait;
use App\Entity\Traits\SlugTrait;
use App\Entity\Traits\TitleTrait;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Class BlogPost.
 *
 * @category Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\BlogPostRepository")
 * @Vich\Uploadable
 */
class BlogPost extends AbstractBase
{
    use TitleTrait;
    use ImageTrait;
    use SlugTrait;
    use DescriptionTrait;

    /**
     * @var DateTimeInterface
     *
     * @ORM\Column(type="date")
     */
    private $publishedAt;

    /**
     * @var File
     *
     * @Vich\UploadableField(mapping="post", fileNameProperty="imageName")
     * @Assert\File(
     *     maxSize="10M",
     *     mimeTypes={"image/jpg", "image/jpeg", "image/png", "image/gif"}
     * )
     * @Assert\Image(minWidth=1200)
     */
    private $imageFile;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaKeywords;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metaDescription;

    /**
     * @var ArrayCollection
     *
     * @ORM\ManyToMany(targetEntity="BlogCategory", inversedBy="posts")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    private $categories;

    /**
     * Methods.
     */

    /**
     * Post constructor.
     */
    public function __construct()
    {
        $this->categories = new ArrayCollection();
    }

    /**
     * @param DateTimeInterface $publishedAt
     *
     * @return $this
     */
    public function setPublishedAt(DateTimeInterface $publishedAt)
    {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    /**
     * @return DateTimeInterface
     */
    public function getPublishedAt()
    {
        return $this->publishedAt;
    }

    /**
     * @param string $metaKeywords
     *
     * @return $this
     */
    public function setMetaKeywords($metaKeywords)
    {
        $this->metaKeywords = $metaKeywords;

        return $this;
    }

    /**
     * @return string
     */
    public function getMetaKeywords()
    {
        return $this->metaKeywords;
    }

    /**
     * @param string $metaDescription
     *
     * @return $this
     */
    public function setMetaDescription($metaDescription)
    {
        $this->metaDescription = $metaDescription;

        return $this;
    }

    /**
     * @return string
     */
    public function getMetaDescription()
    {
        return $this->metaDescription;
    }

    /**
     * @param ArrayCollection $categories
     *
     * @return $this
     */
    public function setCategories(ArrayCollection $categories)
    {
        $this->categories = $categories;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getCategories()
    {
        return $this->categories;
    }

    /**
     * @param BlogCategory $category
     *
     * @return $this
     */
    public function addCategory(BlogCategory $category)
    {
        $category->addPost($this);
        $this->categories[] = $category;

        return $this;
    }

    /**
     * @param BlogCategory $category
     */
    public function removeCategory(BlogCategory $category)
    {
        $this->categories->removeElement($category);
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->title ? $this->getTitle() : '---';
    }
}
