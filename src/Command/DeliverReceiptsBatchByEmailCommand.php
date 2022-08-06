<?php

namespace App\Command;

use App\Entity\Receipt;
use App\Enum\StudentPaymentEnum;
use App\Pdf\ReceiptBuilderPdf;
use App\Pdf\ReceiptReminderBuilderPdf;
use App\Service\NotificationService;
use Exception;
use Symfony\Bridge\Monolog\Logger;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Class DeliverReceiptsBatchByEmailCommand.
 *
 * @category Command
 */
class DeliverReceiptsBatchByEmailCommand extends Command
{
    /**
     * Configure command.
     */
    protected function configure()
    {
        $this
            ->setName('app:deliver:receipts:batch')
            ->setDescription('Deliver a receipts batch by email')
            ->addArgument(
                'receipts',
                InputArgument::IS_ARRAY | InputArgument::REQUIRED,
                'The receipts ID list stored in database to deliver'
            )
            ->addOption(
                'force',
                null,
                InputOption::VALUE_NONE,
                'If set, the task will deliver the email'
            )
        ;
    }

    /**
     * Execute command.
     *
     * @return int|void|null
     *
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('<info>Welcome to '.$this->getName().' command</info>');
        /** @var Receipt[]|array $receipts */
        $receipts = $this->getContainer()->get('doctrine')->getRepository(Receipt::class)->findByIdsArray($input->getArgument('receipts'));
        if (count($receipts) > 0) {
            /** @var Logger $logger */
            $logger = $this->getContainer()->get('monolog.logger');
            /** @var ReceiptReminderBuilderPdf $rrbp */
            $rrbp = $this->getContainer()->get('app.receipt_reminder_pdf_builder');
            /** @var ReceiptBuilderPdf $rbp */
            $rbp = $this->getContainer()->get('app.receipt_pdf_builder');
            /** @var NotificationService $messenger */
            $messenger = $this->getContainer()->get('app.notification');

            $output->writeln('building PDF receipts IDs# number '.implode(' ', $input->getArgument('receipts')));
            $output->writeln('searched receipts found '.count($receipts));

            /** @var Receipt $receipt */
            foreach ($receipts as $receipt) {
                $output->write('building PDF receipt number '.$receipt->getReceiptNumber().'... ');
                if (StudentPaymentEnum::BANK_ACCOUNT_NUMBER === $receipt->getMainSubject()->getPayment()) {
                    // build receipt PDF
                    $pdf = $rbp->build($receipt);
                } else {
                    // build receipt reminder PDF
                    $pdf = $rrbp->build($receipt);
                }
                $output->writeln('<info>OK</info>');
                $logger->info('[DRBBEC] PDF receipt #'.$receipt->getId().' number '.$receipt->getReceiptNumber().' succesfully build.');
                if ($input->getOption('force')) {
                    $output->write('delivering PDF receipt number '.$receipt->getReceiptNumber().'... ');
                    if ($receipt->getMainEmail()) {
                        if (StudentPaymentEnum::BANK_ACCOUNT_NUMBER === $receipt->getMainSubject()->getPayment()) {
                            // send receipt PDF
                            $result = $messenger->sendReceiptPdfNotification($receipt, $pdf);
                        } else {
                            // send receipt reminder PDF
                            $result = $messenger->sendReceiptReminderPdfNotification($receipt, $pdf);
                        }
                        if (0 === $result) {
                            $output->writeln('<error>KO</error>');
                            $logger->error('[DRBBEC] delivering PDF receipt #'.$receipt->getId().' number '.$receipt->getReceiptNumber().' failed.');
                        } else {
                            $output->writeln('<info>OK</info>');
                            $logger->info('[DRBBEC] PDF receipt #'.$receipt->getId().' number '.$receipt->getReceiptNumber().' succesfully delivered.');
                        }
                    } else {
                        $output->writeln('<comment>KO</comment>');
                        $logger->error('[DRBBEC] PDF receipt #'.$receipt->getId().' number '.$receipt->getReceiptNumber().' not delivered. Missing email in '.$receipt->getMainSubject()->getFullCanonicalName().'.');
                    }
                }
            }
        } else {
            $output->writeln('<error>No receipts with IDs# '.implode(', ', $input->getArgument('receipt')).' found. Nothing send.</error>');
        }

        $output->writeln('<info>EOF.</info>');
    }
}
