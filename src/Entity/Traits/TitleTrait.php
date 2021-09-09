<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

Trait TitleTrait
{
    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private string $title;

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTitle(): string
    {
        return $this->title;
    }
}
