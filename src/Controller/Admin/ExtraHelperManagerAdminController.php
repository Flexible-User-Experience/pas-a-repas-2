<?php

namespace App\Controller\Admin;

use App\Manager\EventManager;
use App\Pdf\ExportCalendarToListBuilderPdf;
use DateTime;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;

class ExtraHelperManagerAdminController extends BaseAdminController
{
    public function exportCalendarPdfListAction(EventManager $ems, ExportCalendarToListBuilderPdf $eclb, TranslatorInterface $ts, string $start, string $end): Response
    {
        $startDate = DateTime::createFromFormat('Y-m-d', $start);
        $endDate = DateTime::createFromFormat('Y-m-d', $end);
        if ($startDate && $endDate) {
            if ($endDate->format('Y-m-d') >= $startDate->format('Y-m-d')) {
                $exportCalendarList = $ems->getCalendarEventsListFromDates($startDate, $endDate);
                if ($exportCalendarList->hasDays()) {
                    $pdf = $eclb->build($exportCalendarList);

                    return new Response($pdf->Output('box_idiomes_calendar_list_from_'.$startDate->format('d-m-Y').'_to_'.$endDate->format('d-m-Y').'.pdf', 'I'), 200, ['Content-type' => 'application/pdf']);
                }
                $this->addFlash('warning', $ts->trans('backend.admin.calendar.export.error.no_items_found', [
                    '%start%' => $startDate->format('d/m/Y'),
                    '%end%' => $endDate->format('d/m/Y'),
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
