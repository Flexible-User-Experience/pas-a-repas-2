<?php

namespace App\Entity;

use App\Enum\InvoiceYearMonthEnum;
use App\Enum\StudentPaymentEnum;
use Doctrine\ORM\Mapping as ORM;

/**
 * Abstract class AbstractReceiptInvoice.
 *
 * @category Entity
 */
abstract class AbstractReceiptInvoice extends AbstractBase
{
    /**
     * @var Student
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Student")
     * @ORM\JoinColumn(name="student_id", referencedColumnName="id")
     */
    protected $student;

    /**
     * @var Person
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Person")
     * @ORM\JoinColumn(name="person_id", referencedColumnName="id")
     */
    protected $person;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date", nullable=true)
     */
    protected $date;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", nullable=true, options={"default"=0})
     */
    protected $isPayed = false;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date", nullable=true)
     */
    protected $paymentDate;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", nullable=true, options={"default"=0})
     */
    protected $isSended = false;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date", nullable=true)
     */
    protected $sendDate;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", nullable=true, options={"default"=0})
     */
    protected $isSepaXmlGenerated = false;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date", nullable=true)
     */
    protected $sepaXmlGeneratedDate;

    /**
     * @var float
     *
     * @ORM\Column(type="float", nullable=true)
     */
    protected $baseAmount;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", nullable=true, options={"default"=0})
     */
    protected $discountApplied;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    protected $month;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    protected $year;

    /**
     * @var bool
     *
     * @ORM\Column(type="boolean", nullable=true, options={"default"=0})
     */
    protected $isForPrivateLessons;

    /**
     * Methods.
     */

    /**
     * @return Student
     */
    public function getStudent()
    {
        return $this->student;
    }

    /**
     * @param Student $student
     *
     * @return $this
     */
    public function setStudent($student)
    {
        $this->student = $student;

        return $this;
    }

    /**
     * @return Person
     */
    public function getPerson()
    {
        return $this->person;
    }

    /**
     * @param Person $person
     *
     * @return $this
     */
    public function setPerson($person)
    {
        $this->person = $person;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @return string
     */
    public function getDateString()
    {
        return $this->getDate() ? $this->getDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    /**
     * @param \DateTime $date
     *
     * @return $this
     */
    public function setDate(\DateTime $date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return bool
     */
    public function isPayed()
    {
        return $this->isPayed;
    }

    /**
     * @return bool
     */
    public function getIsPayed()
    {
        return $this->isPayed();
    }

    /**
     * @param bool $isPayed
     *
     * @return $this
     */
    public function setIsPayed($isPayed)
    {
        $this->isPayed = $isPayed;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getPaymentDate()
    {
        return $this->paymentDate;
    }

    /**
     * @return string
     */
    public function getPaymentDateString()
    {
        return $this->getPaymentDate() ? $this->getPaymentDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    /**
     * @param \DateTime $paymentDate
     *
     * @return $this
     */
    public function setPaymentDate($paymentDate)
    {
        $this->paymentDate = $paymentDate;

        return $this;
    }

    /**
     * @return bool
     */
    public function isSended()
    {
        return $this->isSended;
    }

    /**
     * @return bool
     */
    public function getIsSended()
    {
        return $this->isSended();
    }

    /**
     * @param bool $isSended
     *
     * @return $this
     */
    public function setIsSended($isSended)
    {
        $this->isSended = $isSended;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getSendDate()
    {
        return $this->sendDate;
    }

    /**
     * @return string
     */
    public function getSendDateString()
    {
        return $this->getSendDate() ? $this->getSendDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    /**
     * @param \DateTime|null $sendDate
     *
     * @return $this
     */
    public function setSendDate($sendDate)
    {
        $this->sendDate = $sendDate;

        return $this;
    }

    public function isReadyToGenerateSepa(): bool
    {
        $result = true;
        /** @var Student|Person $subject */
        $subject = $this->getMainSubject();
        if (StudentPaymentEnum::BANK_ACCOUNT_NUMBER !== $subject->getPayment()) {
            $result = false;
        }
        if (!$subject->getBank()->getAccountNumber()) {
            $result = false;
        }

        return $result;
    }

    /**
     * @return bool
     */
    public function isSepaXmlGenerated()
    {
        return $this->isSepaXmlGenerated;
    }

    /**
     * @return bool
     */
    public function getSepaXmlGenerated()
    {
        return $this->isSepaXmlGenerated();
    }

    /**
     * @param bool $isSepaXmlGenerated
     *
     * @return $this
     */
    public function setIsSepaXmlGenerated($isSepaXmlGenerated)
    {
        $this->isSepaXmlGenerated = $isSepaXmlGenerated;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getSepaXmlGeneratedDate()
    {
        return $this->sepaXmlGeneratedDate;
    }

    /**
     * @return string
     */
    public function getSepaXmlGeneratedDateString()
    {
        return $this->getSepaXmlGeneratedDate() ? $this->getSepaXmlGeneratedDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    /**
     * @param \DateTime $sepaXmlGeneratedDate
     *
     * @return $this
     */
    public function setSepaXmlGeneratedDate($sepaXmlGeneratedDate)
    {
        $this->sepaXmlGeneratedDate = $sepaXmlGeneratedDate;

        return $this;
    }

    /**
     * @return float
     */
    public function getBaseAmount()
    {
        return $this->baseAmount;
    }

    /**
     * @return string
     */
    public function getBaseAmountString()
    {
        return number_format($this->baseAmount, 2, ',', '.').'€';
    }

    /**
     * @param float $baseAmount
     *
     * @return $this
     */
    public function setBaseAmount($baseAmount)
    {
        $this->baseAmount = $baseAmount;

        return $this;
    }

    /**
     * @return bool
     */
    public function isDiscountApplied()
    {
        return $this->discountApplied;
    }

    /**
     * @param bool $discountApplied
     *
     * @return $this
     */
    public function setDiscountApplied($discountApplied)
    {
        $this->discountApplied = $discountApplied;

        return $this;
    }

    /**
     * @return int
     */
    public function getMonth()
    {
        return $this->month;
    }

    /**
     * @return int
     */
    public function getMonthNameString()
    {
        return InvoiceYearMonthEnum::getTranslatedMonthEnumArray()[$this->getMonth()];
    }

    /**
     * @param int $month
     *
     * @return $this
     */
    public function setMonth($month)
    {
        $this->month = $month;

        return $this;
    }

    /**
     * @return int
     */
    public function getYear()
    {
        return $this->year;
    }

    /**
     * @param int $year
     *
     * @return $this
     */
    public function setYear($year)
    {
        $this->year = $year;

        return $this;
    }

    /**
     * @return bool
     */
    public function isForPrivateLessons()
    {
        return $this->isForPrivateLessons;
    }

    /**
     * @return bool
     */
    public function getIsForPrivateLessons()
    {
        return $this->isForPrivateLessons();
    }

    /**
     * @param bool $isForPrivateLessons
     *
     * @return $this
     */
    public function setIsForPrivateLessons($isForPrivateLessons)
    {
        $this->isForPrivateLessons = $isForPrivateLessons;

        return $this;
    }

    /**
     * Get parent's email first, or student's one if it's not set.
     *
     * @return string
     */
    public function getMainEmail()
    {
        $subject = $this->getMainSubject();

        return $subject->getEmail();
    }

    /**
     * Get parent's name first, or student's one if it's not set.
     *
     * @return string
     */
    public function getMainEmailName()
    {
        $subject = $this->getMainSubject();

        return $subject->getFullName();
    }

    /**
     * Get parent's bank, or student's one if it's not set.
     *
     * @return Bank
     */
    public function getMainBank()
    {
        $subject = $this->getMainSubject();

        return $subject->getBank();
    }

    /**
     * Get parent's debtor mandates, or student's one if it's not set.
     *
     * @return string
     */
    public function getDebtorMandate()
    {
        $subject = $this->getMainSubject();

        return $subject->getDebtorMandate();
    }

    /**
     * Get parent's debtor mandate sign date, or student's one if it's not set.
     *
     * @return string
     */
    public function getDebtorMandateSignDate()
    {
        $subject = $this->getMainSubject();

        return $subject->getDebtorMandateSignDate();
    }

    /**
     * Get main subject, obtains who is most important actor (student or parent).
     *
     * @return Person|Student
     */
    public function getMainSubject()
    {
        /** @var Student|Person $subject */
        $subject = $this->getStudent();
        if (!is_null($subject->getParent())) {
            $subject = $subject->getParent();
        }

        return $subject;
    }
}
