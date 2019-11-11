<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * Class Receipt.
 *
 * @category Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\ReceiptRepository")
 * @ORM\Table(name="receipt")
 * @UniqueEntity(fields={"month", "year", "student", "person", "isForPrivateLessons"})
 */
class Receipt extends AbstractReceiptInvoice
{
    /**
     * @var ArrayCollection|array|ReceiptLine[]
     *
     * @ORM\OneToMany(targetEntity="App\Entity\ReceiptLine", mappedBy="receipt", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $lines;

    /**
     * Methods.
     */

    /**
     * Receipt constructor.
     */
    public function __construct()
    {
        $this->lines = new ArrayCollection();
    }

    /**
     * @return ReceiptLine[]|array|ArrayCollection
     */
    public function getLines()
    {
        return $this->lines;
    }

    /**
     * @param ReceiptLine[]|array|ArrayCollection $lines
     *
     * @return $this
     */
    public function setLines($lines)
    {
        $this->lines = $lines;

        return $this;
    }

    /**
     * @param ReceiptLine $line
     *
     * @return $this
     */
    public function addLine(ReceiptLine $line)
    {
        if (!$this->lines->contains($line)) {
            $line->setReceipt($this);
            $this->lines->add($line);
            $this->setBaseAmount($this->getBaseAmount() + $line->getTotal());
            $this->setDiscountApplied($this->getStudent()->hasDiscount());
        }

        return $this;
    }

    /**
     * @param ReceiptLine $line
     *
     * @return $this
     */
    public function removeLine(ReceiptLine $line)
    {
        if ($this->lines->contains($line)) {
            $this->lines->removeElement($line);
            $this->setBaseAmount($this->getBaseAmount() - $line->getTotal());
        }

        return $this;
    }

    /**
     * @return string
     *
     * @throws \Exception
     */
    public function getReceiptNumber()
    {
        $date = new \DateTime();
        if ($this->getDate()) {
            $date = $this->getDate();
        }

        return $date->format('Y').'/'.$this->getId();
    }

    /**
     * @return string
     *
     * @throws \Exception
     */
    public function getSluggedReceiptNumber()
    {
        $date = new \DateTime();
        if ($this->getDate()) {
            $date = $this->getDate();
        }

        return $date->format('Y').'-'.$this->getId();
    }

    /**
     * @return string
     *
     * @throws \Exception
     */
    public function getUnderscoredReceiptNumber()
    {
        $date = new \DateTime();
        if ($this->getDate()) {
            $date = $this->getDate();
        }

        return $date->format('Y').'_'.$this->getId();
    }

    /**
     * @return float
     */
    public function calculateTotalBaseAmount()
    {
        $result = 0.0;
        /** @var ReceiptLine $line */
        foreach ($this->lines as $line) {
            $result = $result + $line->calculateBaseAmount();
        }

        return $result;
    }

    /**
     * @return string
     *
     * @throws \Exception
     */
    public function __toString()
    {
        return $this->id ? $this->getReceiptNumber().' · '.$this->getStudent().' · '.$this->getBaseAmountString() : '---';
    }
}
