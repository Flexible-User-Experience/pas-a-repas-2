<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

/**
 * Position trait
 *
 * @category Trait
 */
Trait PositionTrait
{
    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $position;

    /**
     * Set position
     *
     * @param string $position
     *
     * @return $this
     */
    public function setPosition($position)
    {
        $this->position = $position;

        return $this;
    }

    /**
     * Get position
     *
     * @return string
     */
    public function getPosition()
    {
        return $this->position;
    }
}
