<?php

namespace App\Enum;

/**
 * TeacherColorEnum class.
 *
 * @category Enum
 */
class TeacherColorEnum
{
    const MAGENTA = 0;
    const BLUE = 1;
    const YELLOW = 2;
    const GREEN = 3;

    /**
     * @return array
     */
    public static function getEnumArray()
    {
        return array_flip(self::getReversedEnumArray());
    }

    /**
     * @return array
     */
    public static function getReversedEnumArray()
    {
        return array(
            self::MAGENTA => 'color.magenta',
            self::BLUE => 'color.blue',
            self::YELLOW => 'color.yellow',
            self::GREEN => 'color.green',
        );
    }
}
