<?php

namespace App\Manager;

use App\Repository\EventRepository;
use App\Repository\StudentRepository;
use Doctrine\ORM\EntityManager;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Abstract class AbstractGenerateReceiptInvoiceFormManager.
 *
 * @category Manager
 */
abstract class AbstractGenerateReceiptInvoiceFormManager
{
    /**
     * @var LoggerInterface
     */
    protected LoggerInterface $logger;

    /**
     * @var KernelInterface
     */
    protected $kernel;

    /**
     * @var KernelInterface EntityManager
     */
    protected $em;

    /**
     * @var TranslatorInterface
     */
    protected TranslatorInterface $ts;

    /**
     * @var StudentRepository
     */
    protected StudentRepository $sr;

    /**
     * @var EventRepository
     */
    protected EventRepository $er;

    /**
     * Methods.
     */

    /**
     * AbstractGenerateReceiptInvoiceFormManager constructor.
     *
     * @param LoggerInterface     $logger
     * @param KernelInterface     $kernel
     * @param EntityManager       $em
     * @param TranslatorInterface $ts
     * @param StudentRepository   $sr
     * @param EventRepository     $er
     */
    public function __construct(LoggerInterface $logger, KernelInterface $kernel, EntityManager $em, TranslatorInterface $ts, StudentRepository $sr, EventRepository $er)
    {
        $this->logger = $logger;
        $this->kernel = $kernel;
        $this->em = $em;
        $this->ts = $ts;
        $this->sr = $sr;
        $this->er = $er;
    }

    /**
     * @param string $value
     *
     * @return float
     */
    protected function parseStringToFloat($value)
    {
        $stringParsedValue = str_replace('.', '', $value);
        $stringParsedValue = str_replace(',', '.', $stringParsedValue);

        return floatval($stringParsedValue);
    }
}
