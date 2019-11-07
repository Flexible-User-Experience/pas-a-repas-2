<?php

namespace App\Enum;

/**
 * Class EventClassroomTypeEnum.
 *
 * @category Enum
 */
class EventClassroomTypeEnum
{
    const CLASSROOM_1 = 0;
    const CLASSROOM_2 = 1;
    const CLASSROOM_3 = 2;
    const CLASSROOM_4 = 3;
    const CLASSROOM_5 = 4;

    /**
     * Methods
     */

    /**
     * @return array
     */
    public static function getEnumArray()
    {
        return array_flip(self::getOldEnumArray());
    }

    /**
     * @return array
     */
    public static function getOldEnumArray()
    {
        return array(
            self::CLASSROOM_1 => 'backend.admin.event.classroom_1',
            self::CLASSROOM_2 => 'backend.admin.event.classroom_2',
            self::CLASSROOM_3 => 'backend.admin.event.classroom_3',
            self::CLASSROOM_4 => 'backend.admin.event.classroom_4',
            self::CLASSROOM_5 => 'backend.admin.event.classroom_5',
        );
    }

    /**
     * @return array
     */
    public static function getTranslatedEnumArray()
    {
        return array_flip(self::getOldTranslatedEnumArray());
    }

    /**
     * @return array
     */
    public static function getOldTranslatedEnumArray()
    {
        return array(
            self::CLASSROOM_1 => 'Aula 1',
            self::CLASSROOM_2 => 'Aula 2',
            self::CLASSROOM_3 => 'Aula 3',
            self::CLASSROOM_4 => 'Aula 4',
            self::CLASSROOM_5 => 'Aula 5',
        );
    }

    /**
     * @return array
     */
    public static function getShortTranslatedEnumArray()
    {
        return array_flip(self::getOldShortTranslatedEnumArray());
    }

    /**
     * @return array
     */
    public static function getOldShortTranslatedEnumArray()
    {
        return array(
            self::CLASSROOM_1 => '1',
            self::CLASSROOM_2 => '2',
            self::CLASSROOM_3 => '3',
            self::CLASSROOM_4 => '4',
            self::CLASSROOM_5 => '5',
        );
    }
}
