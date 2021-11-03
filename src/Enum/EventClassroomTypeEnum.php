<?php

namespace App\Enum;

final class EventClassroomTypeEnum
{
    public const CLASSROOM_1 = 0;
    public const CLASSROOM_2 = 1;
    public const CLASSROOM_3 = 2;

    public static function getEnumArray(): array
    {
        return array_flip(self::getReversedEnumArray());
    }

    public static function getReversedEnumArray(): array
    {
        return [
            self::CLASSROOM_1 => 'backend.admin.event.classroom_1',
            self::CLASSROOM_2 => 'backend.admin.event.classroom_2',
            self::CLASSROOM_3 => 'backend.admin.event.classroom_3',
        ];
    }

    public static function getTranslatedEnumArray(): array
    {
        return [
            self::CLASSROOM_1 => 'Aula 1',
            self::CLASSROOM_2 => 'Aula 2',
            self::CLASSROOM_3 => 'Aula 3',
        ];
    }

    public static function getShortTranslatedEnumArray(): array
    {
        return [
            self::CLASSROOM_1 => '1',
            self::CLASSROOM_2 => '2',
            self::CLASSROOM_3 => '3',
        ];
    }
}
