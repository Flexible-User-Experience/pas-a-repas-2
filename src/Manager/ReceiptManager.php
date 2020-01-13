<?php

namespace App\Manager;

use App\Entity\Invoice;
use App\Entity\InvoiceLine;
use App\Entity\Receipt;
use App\Repository\InvoiceRepository;
use DateTime;
use Exception;

/**
 * Class ReceiptManager.
 *
 * @category Manager
 */
class ReceiptManager
{
    /**
     * @var InvoiceRepository
     */
    private InvoiceRepository $ir;

    /**
     * Methods.
     */

    /**
     * ReceiptManager constructor.
     *
     * @param InvoiceRepository $ir
     */
    public function __construct(InvoiceRepository $ir)
    {
        $this->ir = $ir;
    }

    /**
     * @param Receipt $receipt
     *
     * @return Invoice
     * @throws Exception
     */
    public function createInvoiceFromReceipt(Receipt $receipt)
    {
        $invoice = new Invoice();
        $invoice
            ->setReceipt($receipt)
            ->setStudent($receipt->getStudent())
            ->setPerson($receipt->getPerson())
            ->setDate(new DateTime())
            ->setIrpfPercentage(Invoice::TAX_IRPF)
            ->setTaxPercentage(Invoice::TAX_IVA)
            ->setIsPayed($receipt->getIsPayed())
            ->setPaymentDate($receipt->getPaymentDate() ? $receipt->getPaymentDate() : null)
            ->setDiscountApplied($receipt->isDiscountApplied())
            ->setMonth($receipt->getMonth())
            ->setYear($receipt->getYear())
            ->setIsSended(false)
        ;
        foreach ($receipt->getLines() as $line) {
            $invoiceLine = new InvoiceLine();
            $invoiceLine
                ->setInvoice($invoice)
                ->setDescription($line->getDescription())
                ->setUnits($line->getUnits())
                // fetch increment to keep same total amount like a base
                ->setPriceUnit($invoice->calculateIrpfOverhead($line->getPriceUnit()))
                ->setDiscount($invoice->calculateIrpfOverhead($line->getDiscount()))
                ->setTotal($invoiceLine->getUnits() * $invoiceLine->getPriceUnit() - $invoiceLine->getDiscount())
            ;
            $invoice->basicAddLine($invoiceLine);
        }
        $invoice
            ->setBaseAmount($invoice->calculateBaseAmount())
            ->setTotalAmount($invoice->calculateTotalAmount())
        ;

        return $invoice;
    }

    /**
     * @param Receipt $receipt
     *
     * @return bool
     */
    public function isReceiptInvoiced(Receipt $receipt)
    {
        $searchedInvoice = $this->ir->findOneBy(
            array(
                'receipt' => $receipt,
            )
        );

        return is_null($searchedInvoice) ? false : true;
    }
}
