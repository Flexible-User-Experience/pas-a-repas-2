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
        );
    }
}
