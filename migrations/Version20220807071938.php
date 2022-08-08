<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220807071938 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE bank_creditor_sepa (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, organization_id VARCHAR(255) NOT NULL, creditor_name VARCHAR(255) NOT NULL, iban VARCHAR(255) NOT NULL, bic VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reset_password_request (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, selector VARCHAR(20) NOT NULL, hashed_token VARCHAR(100) NOT NULL, requested_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', expires_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_7CE748AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE reset_password_request ADD CONSTRAINT FK_7CE748AA76ED395 FOREIGN KEY (user_id) REFERENCES admin_user (id)');
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
        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD17672DB8670');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3372DB8670');
        $this->addSql('DROP TABLE bank_creditor_sepa');
        $this->addSql('DROP TABLE reset_password_request');
        $this->addSql('DROP INDEX IDX_34DCD17672DB8670 ON person');
        $this->addSql('ALTER TABLE pre_register DROP has_been_previous_customer, DROP wants_to_make_official_exam');
        $this->addSql('DROP INDEX IDX_B723AF3372DB8670 ON student');
        $this->addSql('ALTER TABLE student DROP bank_creditor_sepa_id');
    }
}
