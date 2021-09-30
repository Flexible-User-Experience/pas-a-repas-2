<?php

namespace App\Entity;

use App\Enum\TeacherAbsenceTypeEnum;
use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TeacherAbsenceRepository")
 * @ORM\Table(name="teacher_absence")
 * @UniqueEntity({"teacher", "day"})
 */
class TeacherAbsence extends AbstractBase
{
    /**
     * @var Teacher
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Teacher")
     */
    private $teacher;

    /**
     * @var int
     *
     * @ORM\Column(type="integer", options={"default"=0})
     */
    private $type = 0;

    /**
     * @var DateTime
     *
     * @ORM\Column(type="date")
     */
    private $day;

    /**
     * @return Teacher
     */
    public function getTeacher()
    {
        return $this->teacher;
    }

    /**
     * @param Teacher $teacher
     *
     * @return TeacherAbsence
     */
    public function setTeacher($teacher)
    {
        $this->teacher = $teacher;

        return $this;
    }

    /**
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * @return string
     */
    public function getTypeString()
    {
        return TeacherAbsenceTypeEnum::getReversedEnumArray()[$this->type];
    }

    /**
     * @param int $type
     *
     * @return TeacherAbsence
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return DateTime
     */
    public function getDay()
    {
        return $this->day;
    }

    /**
     * @return string
     */
    public function getDayString()
    {
        return $this->getDay() ? $this->getDay()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    /**
     * @param DateTime $day
     *
     * @return TeacherAbsence
     */
    public function setDay(DateTime $day)
    {
        $this->day = $day;

        return $this;
    }

    /**
     * @return string
     */
    public function getCalendarTitle()
    {
        return '['.$this->getTypeString().'] '.$this->getTeacher()->getName();
    }

    public function __toString(): string
    {
        return $this->id ? $this->getDayString().' · '.$this->getTypeString().' · '.$this->getTeacher() : AbstractBase::DEFAULT_NULL_STRING;
    }
}
