<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;

/**
 * Class User.
 *
 * @category Entity
 *
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="admin_user")
 */
class User extends BaseUser
{
    /**
     * @var int
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    protected $id;

    /**
     * Methods.
     */

    /**
     * @return int $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getFullName()
    {
        return $this->getUsername();
    }
}
