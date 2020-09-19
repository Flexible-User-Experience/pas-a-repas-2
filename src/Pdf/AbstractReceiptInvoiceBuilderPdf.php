<?php

namespace App\Pdf;

use App\Service\SmartAssetsHelperService;
use Qipsius\TCPDFBundle\Controller\TCPDFController;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Abstract class AbstractReceiptInvoiceBuilderPdf.
 *
 * @category Service
 */
abstract class AbstractReceiptInvoiceBuilderPdf
{
    /**
     * @var TCPDFController
     */
    protected TCPDFController $tcpdf;

    /**
     * @var SmartAssetsHelperService
     */
    protected SmartAssetsHelperService $sahs;

    /**
     * @var TranslatorInterface
     */
    protected TranslatorInterface $ts;

    /**
     * @var string project web title
     */
    protected string $pwt;

    /**
     * @var string boss name
     */
    protected string $bn;

    /**
     * @var string boss DNI
     */
    protected string $bd;

    /**
     * @var string boss address
     */
    protected string $ba;

    /**
     * @var string boss city
     */
    protected string $bc;

    /**
     * @var string IBAN bussines
     */
    protected string $ib;

    /**
     * @var string default locale useful in CLI
     */
    protected string $locale;

    /**
     * AbstractReceiptInvoiceBuilderPdf constructor.
     *
     * @param TCPDFController          $tcpdf
     * @param SmartAssetsHelperService $sahs
     * @param TranslatorInterface      $ts
     * @param string                   $pwt
     * @param string                   $bn
     * @param string                   $bd
     * @param string                   $ba
     * @param string                   $bc
     * @param string                   $ib
     * @param string                   $locale
     */
    public function __construct(TCPDFController $tcpdf, SmartAssetsHelperService $sahs, TranslatorInterface $ts, $pwt, $bn, $bd, $ba, $bc, $ib, $locale)
    {
        $this->tcpdf = $tcpdf;
        $this->sahs = $sahs;
        $this->ts = $ts;
        $this->pwt = $pwt;
        $this->bn = $bn;
        $this->bd = $bd;
        $this->ba = $ba;
        $this->bc = $bc;
        $this->ib = $ib;
        $this->locale = $locale;
    }

    /**
     * @param float $val
     *
     * @return string
     */
    protected function floatStringFormat($val)
    {
        return number_format($val, 2, ',', '.');
    }

    /**
     * @param float $val
     *
     * @return string
     */
    protected function floatMoneyFormat($val)
    {
        return $this->floatStringFormat($val).' €';
    }
}
