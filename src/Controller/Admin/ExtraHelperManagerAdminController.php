<?php

namespace App\Controller\Admin;

use App\Entity\AbstractBase;
use App\Manager\EventManager;
use App\Pdf\ExportCalendarToListBuilderPdf;
use DateTime;
use Sonata\AdminBundle\Controller\CRUDController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;

final class ExtraHelperManagerAdminController extends CRUDController
{
    public function exportCalendarPdfListAction(EventManager $ems, ExportCalendarToListBuilderPdf $eclb, TranslatorInterface $ts, ParameterBagInterface $parameterBag, string $start, string $end): Response
    {
        $startDate = DateTime::createFromFormat(AbstractBase::DATABASE_DATE_STRING_FORMAT, $start);
        $endDate = DateTime::createFromFormat(AbstractBase::DATABASE_DATE_STRING_FORMAT, $end);
        if ($startDate && $endDate) {
            if ($endDate->format(AbstractBase::DATABASE_DATE_STRING_FORMAT) >= $startDate->format(AbstractBase::DATABASE_DATE_STRING_FORMAT)) {
                $exportCalendarList = $ems->getCalendarEventsListFromDates($startDate, $endDate);
                if ($exportCalendarList->hasDays()) {
                    $pdf = $eclb->build($exportCalendarList);

                    return new Response($pdf->Output($parameterBag->get('project_export_filename').'_calendar_list_from_'.$startDate->format('d-m-Y').'_to_'.$endDate->format('d-m-Y').'.pdf'), 200, ['Content-type' => 'application/pdf']);
                }
                $this->addFlash('warning', $ts->trans('backend.admin.calendar.export.error.no_items_found', [
                    '%start%' => $startDate->format(AbstractBase::DATE_STRING_FORMAT),
                    '%end%' => $endDate->format(AbstractBase::DATE_STRING_FORMAT),
                ]));
            } else {
                $this->addFlash('danger', $ts->trans('backend.admin.calendar.export.error.end_date_period'));
            }
        } else {
            $this->addFlash('danger', $ts->trans('backend.admin.calendar.export.error.no_dates_found'));
        }

        return $this->redirectToRoute('sonata_admin_dashboard');
    }
}
