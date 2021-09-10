<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

Trait PositionTrait
{
    /**
     * @ORM\Column(type="integer")
     */
    private int $position;

    public function setPosition(int $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getPosition(): int
    {
        return $this->position;
    }
}
