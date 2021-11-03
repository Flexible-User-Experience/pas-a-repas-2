<?php

namespace App\Entity;

use App\Enum\InvoiceYearMonthEnum;
use App\Enum\StudentPaymentEnum;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;

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

    public function setDate(DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function isPayed(): bool
    {
        return $this->isPayed;
    }

    public function getIsPayed(): bool
    {
        return $this->isPayed();
    }

    public function setIsPayed(bool $isPayed): self
    {
        $this->isPayed = $isPayed;

        return $this;
    }

    public function getPaymentDate(): DateTimeInterface
    {
        return $this->paymentDate;
    }

    public function getPaymentDateString(): string
    {
        return $this->getPaymentDate() ? $this->getPaymentDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    public function setPaymentDate(DateTimeInterface $paymentDate): self
    {
        $this->paymentDate = $paymentDate;

        return $this;
    }

    public function isSended(): bool
    {
        return $this->isSended;
    }

    public function getIsSended(): bool
    {
        return $this->isSended();
    }

    public function setIsSended(bool $isSended): self
    {
        $this->isSended = $isSended;

        return $this;
    }

    public function getSendDate(): DateTimeInterface
    {
        return $this->sendDate;
    }

    public function getSendDateString(): string
    {
        return $this->getSendDate() ? $this->getSendDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    public function setSendDate(?DateTimeInterface $sendDate): self
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

    public function isSepaXmlGenerated(): bool
    {
        return $this->isSepaXmlGenerated;
    }

    public function getSepaXmlGenerated(): bool
    {
        return $this->isSepaXmlGenerated();
    }

    public function setIsSepaXmlGenerated(bool $isSepaXmlGenerated): self
    {
        $this->isSepaXmlGenerated = $isSepaXmlGenerated;

        return $this;
    }

    public function getSepaXmlGeneratedDate(): DateTimeInterface
    {
        return $this->sepaXmlGeneratedDate;
    }

    public function getSepaXmlGeneratedDateString(): string
    {
        return $this->getSepaXmlGeneratedDate() ? $this->getSepaXmlGeneratedDate()->format('d/m/Y') : AbstractBase::DEFAULT_NULL_DATE_STRING;
    }

    public function setSepaXmlGeneratedDate(DateTimeInterface $sepaXmlGeneratedDate): self
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
    public function getDebtorMandateSignDate(): string
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
