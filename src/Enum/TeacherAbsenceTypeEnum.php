<?php

namespace App\Enum;

/**
 * Class TeacherAbsenceTypeEnum.
 *
 * @category Enum
 */
class TeacherAbsenceTypeEnum
{
    const PERSONAL_ISSUES = 0;
    const TRAINING = 1;
    const OTHER_ISSUES = 2;
    const HOLIDAYS = 3;
    const SICK_LEAVE = 4;

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
            self::PERSONAL_ISSUES => 'Assumptes personals',
            self::TRAINING => 'Formació',
            self::OTHER_ISSUES => 'Altres motius',
            self::HOLIDAYS => 'Vacances',
            self::SICK_LEAVE => 'Baixa laboral',
        );
    }
}
