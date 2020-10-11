<?php

namespace App\Pdf;

use App\Service\SmartAssetsHelperService;

class BaseTcpdf extends \TCPDF
{
    const PDF_WIDTH = 210;
    const PDF_MARGIN_LEFT = 30;
    const PDF_MARGIN_RIGHT = 30;
    const PDF_MARGIN_TOP = 70;
    const PDF_MARGIN_BOTTOM = 25;
    const PDF_A5_MARGIN_LEFT = 25;
    const PDF_A5_MARGIN_RIGHT = 25;
    const PDF_A5_MARGIN_TOP = 25;
    const PDF_A5_MARGIN_BOTTOM = 25;
    const MARGIN_VERTICAL_SMALL = 3;
    const MARGIN_VERTICAL_BIG = 8;

    private SmartAssetsHelperService $sahs;
    private string $amd;
    private string $bba;
    private string $bpn;

    public function __construct(SmartAssetsHelperService $sahs)
    {
        parent::__construct();
        $this->sahs = $sahs;
        $this->amd = $this->sahs->getAmd();
        $this->bba = $this->sahs->getBba();
        $this->bpn = $this->sahs->getBpn();
    }

    public function header()
    {
        // logo
        $this->Image($this->sahs->getAbsoluteAssetFilePath('/build/img/logo-pdf.png'), 75, 20, 60);
        $this->SetXY(self::PDF_MARGIN_LEFT, 11);
        $this->setFontStyle(null, 'I', 8);
    }

    public function footer()
    {
        // logo
        $this->SetXY(self::PDF_MARGIN_LEFT, 297 - self::PDF_MARGIN_BOTTOM + self::MARGIN_VERTICAL_BIG);
        $this->SetTextColor(128, 128, 128);
        $this->setFontStyle(null, '', 8);
        $this->Write(0, $this->bba.' · 43870 Amposta', '', false, 'C', true);
        $this->Write(0, $this->amd, '', false, 'C', true);
        $this->Write(0, $this->bpn, '', false, 'C', false);
    }

    public function setFontStyle($font = 'dejavusans', $style = '', $size = 12)
    {
        // dejavusans is a UTF-8 Unicode font, if you only need to
        // print standard ASCII chars, you can use core fonts like
        // helvetica or times to reduce file size.
        $this->SetFont($font, $style, $size, '', true);
    }

    public function drawInvoiceLineSeparator($y)
    {
        $this->Line(
            self::PDF_MARGIN_LEFT,
            $y,
            self::PDF_WIDTH - self::PDF_MARGIN_RIGHT,
            $y,
            array(
                'width' => 5,
                'cap' => 'butt',
                'join' => 'miter',
                'dash' => 0,
                'color' => array(179, 110, 171),
            )
        );
    }

    public function drawSvg($file, $x = '', $y = '', $w = 0, $h = 0)
    {
        $this->ImageSVG($file, $x, $y, $w, $h);
    }
}
