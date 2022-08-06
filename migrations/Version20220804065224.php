<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220804065224 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE fos_user_user_group DROP FOREIGN KEY FK_B3C77447FE54D947');
        $this->addSql('DROP TABLE admin_group');
        $this->addSql('DROP TABLE fos_user_user_group');
        $this->addSql('DROP INDEX UNIQ_AD8A54A9C05FB297 ON admin_user');
        $this->addSql('ALTER TABLE admin_user DROP password_requested_at, DROP facebook_uid, DROP date_of_birth, DROP website, DROP biography, DROP timezone, DROP facebook_name, DROP facebook_data, DROP twitter_uid, DROP twitter_name, DROP twitter_data, DROP gplus_uid, DROP gplus_name, DROP gplus_data, CHANGE confirmation_token confirmation_token VARCHAR(255) DEFAULT NULL, CHANGE roles roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AD8A54A9F85E0677 ON admin_user (username)');
        $this->addSql('ALTER TABLE person ADD bank_creditor_sepa_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD17672DB8670 FOREIGN KEY (bank_creditor_sepa_id) REFERENCES bank_creditor_sepa (id)');
        $this->addSql('CREATE INDEX IDX_34DCD17672DB8670 ON person (bank_creditor_sepa_id)');
        $this->addSql('ALTER TABLE pre_register ADD has_been_previous_customer TINYINT(1) DEFAULT 0, ADD wants_to_make_official_exam TINYINT(1) DEFAULT 0');
        $this->addSql('ALTER TABLE student ADD bank_creditor_sepa_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF3372DB8670 FOREIGN KEY (bank_creditor_sepa_id) REFERENCES bank_creditor_sepa (id)');
        $this->addSql('CREATE INDEX IDX_B723AF3372DB8670 ON student (bank_creditor_sepa_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE admin_group (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(180) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, roles LONGTEXT CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci` COMMENT \'(DC2Type:array)\', UNIQUE INDEX UNIQ_CDEABF3F5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE fos_user_user_group (user_id INT NOT NULL, group_id INT NOT NULL, INDEX IDX_B3C77447FE54D947 (group_id), INDEX IDX_B3C77447A76ED395 (user_id), PRIMARY KEY(user_id, group_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE fos_user_user_group ADD CONSTRAINT FK_B3C77447A76ED395 FOREIGN KEY (user_id) REFERENCES admin_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE fos_user_user_group ADD CONSTRAINT FK_B3C77447FE54D947 FOREIGN KEY (group_id) REFERENCES admin_group (id) ON DELETE CASCADE');
        $this->addSql('DROP INDEX UNIQ_AD8A54A9F85E0677 ON admin_user');
        $this->addSql('ALTER TABLE admin_user ADD password_requested_at DATETIME DEFAULT NULL, ADD facebook_uid VARCHAR(255) DEFAULT NULL, ADD date_of_birth DATETIME DEFAULT NULL, ADD website VARCHAR(64) DEFAULT NULL, ADD biography VARCHAR(1000) DEFAULT NULL, ADD timezone VARCHAR(64) DEFAULT NULL, ADD facebook_name VARCHAR(255) DEFAULT NULL, ADD facebook_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD twitter_uid VARCHAR(255) DEFAULT NULL, ADD twitter_name VARCHAR(255) DEFAULT NULL, ADD twitter_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', ADD gplus_uid VARCHAR(255) DEFAULT NULL, ADD gplus_name VARCHAR(255) DEFAULT NULL, ADD gplus_data LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE confirmation_token confirmation_token VARCHAR(180) DEFAULT NULL, CHANGE roles roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_AD8A54A9C05FB297 ON admin_user (confirmation_token)');
        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD17672DB8670');
        $this->addSql('DROP INDEX IDX_34DCD17672DB8670 ON person');
        $this->addSql('ALTER TABLE person DROP bank_creditor_sepa_id');
        $this->addSql('ALTER TABLE pre_register DROP has_been_previous_customer, DROP wants_to_make_official_exam');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3372DB8670');
        $this->addSql('DROP INDEX IDX_B723AF3372DB8670 ON student');
        $this->addSql('ALTER TABLE student DROP bank_creditor_sepa_id');
    }
}
