<?php

namespace App\Service;

use App\Entity\TeacherAbsence;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;
use App\Entity\Event as AppEvent;
use App\Entity\EventFullCalendar;

/**
 * Class EventTrasnformerFactoryService.
 *
 * @category Service
 */
class EventTrasnformerFactoryService
{
    /**
     * @var RouterInterface
     */
    private RouterInterface $router;

    /**
     * Methods.
     */

    /**
     * EventTrasnformerFactoryService constructor.
     *
     * @param RouterInterface $router
     */
    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * Classroom event builder.
     *
     * @param AppEvent $appEvent
     *
     * @return EventFullCalendar
     */
    public function build(AppEvent $appEvent)
    {
        if ($appEvent->getGroup()->isForPrivateLessons()) {
            $eventFullCalendar = new EventFullCalendar($appEvent->getShortCalendarTitleForPrivateLessons(), $appEvent->getBegin());
        } else {
            $eventFullCalendar = new EventFullCalendar($appEvent->getShortCalendarTitle(), $appEvent->getBegin());
        }
        $eventFullCalendar->setEnd($appEvent->getEnd());
        $eventFullCalendar->setOptions([
            'textColor' => '#FFFFFF',
            'borderColor' => $appEvent->getGroup()->getColor(),
            'backgroundColor' => $appEvent->getGroup()->getColor(),
            'url' => $this->router->generate('admin_app_event_edit', array('id' => $appEvent->getId()), UrlGeneratorInterface::ABSOLUTE_PATH),
        ]);
        $eventFullCalendar->setAllDay(false);

        return $eventFullCalendar;
    }

    /**
     * Teacher absence builder.
     *
     * @param TeacherAbsence $teacherAbsence
     *
     * @return EventFullCalendar
     */
    public function buildTeacherAbsence(TeacherAbsence $teacherAbsence)
    {
        $eventFullCalendar = new EventFullCalendar($teacherAbsence->getCalendarTitle(), $teacherAbsence->getDay());
        $eventFullCalendar->setEnd($teacherAbsence->getDay());
        $eventFullCalendar->setOptions([
            'textColor' => '#FFFFFF',
            'borderColor' => '#FA141B',
            'backgroundColor' => '#FA141B',
            'url' => $this->router->generate('admin_app_teacherabsence_edit', array('id' => $teacherAbsence->getId()), UrlGeneratorInterface::ABSOLUTE_PATH),
        ]);
        $eventFullCalendar->setAllDay(true);

        return $eventFullCalendar;
    }
}
