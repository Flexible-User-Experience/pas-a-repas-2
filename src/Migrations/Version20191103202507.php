<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20191103202507 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE bank (id INT AUTO_INCREMENT NOT NULL, person_id INT DEFAULT NULL, name VARCHAR(255) DEFAULT NULL, account_number VARCHAR(255) DEFAULT NULL, swift_code VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_D860BF7A217BBB47 (person_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE city (id INT AUTO_INCREMENT NOT NULL, province_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, postal_code VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_2D5B0234E946114A (province_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE class_group (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, name VARCHAR(255) DEFAULT NULL, book VARCHAR(255) DEFAULT NULL, color VARCHAR(255) NOT NULL, is_for_private_lessons TINYINT(1) DEFAULT \'0\', created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact_message (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, checked TINYINT(1) NOT NULL, answered TINYINT(1) NOT NULL, subject VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, message TEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, description TEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event (id INT AUTO_INCREMENT NOT NULL, teacher_id INT DEFAULT NULL, group_id INT DEFAULT NULL, previous_id INT DEFAULT NULL, next_id INT DEFAULT NULL, begin DATETIME NOT NULL, end DATETIME NOT NULL, classroom INT DEFAULT 0 NOT NULL, day_frequency_repeat INT DEFAULT NULL, until DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_3BAE0AA741807E1D (teacher_id), INDEX IDX_3BAE0AA7FE54D947 (group_id), INDEX IDX_3BAE0AA72DE62210 (previous_id), INDEX IDX_3BAE0AA7AA23F6C8 (next_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event_student (event_id INT NOT NULL, student_id INT NOT NULL, INDEX IDX_3274069C71F7E88B (event_id), INDEX IDX_3274069CCB944F1A (student_id), PRIMARY KEY(event_id, student_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice (id INT AUTO_INCREMENT NOT NULL, receipt_id INT DEFAULT NULL, student_id INT DEFAULT NULL, person_id INT DEFAULT NULL, tax_percentage DOUBLE PRECISION DEFAULT \'0\' NOT NULL, irpf_percentage DOUBLE PRECISION DEFAULT \'15\', total_amount DOUBLE PRECISION DEFAULT NULL, date DATE DEFAULT NULL, is_payed TINYINT(1) DEFAULT \'0\', payment_date DATE DEFAULT NULL, is_sended TINYINT(1) DEFAULT \'0\', send_date DATE DEFAULT NULL, is_sepa_xml_generated TINYINT(1) DEFAULT \'0\', sepa_xml_generated_date DATE DEFAULT NULL, base_amount DOUBLE PRECISION DEFAULT NULL, discount_applied TINYINT(1) DEFAULT \'0\', month INT NOT NULL, year INT NOT NULL, is_for_private_lessons TINYINT(1) DEFAULT \'0\', created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_906517442B5CA896 (receipt_id), INDEX IDX_90651744CB944F1A (student_id), INDEX IDX_90651744217BBB47 (person_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE invoice_line (id INT AUTO_INCREMENT NOT NULL, invoice_id INT DEFAULT NULL, student_id INT DEFAULT NULL, description VARCHAR(255) NOT NULL, units DOUBLE PRECISION NOT NULL, price_unit DOUBLE PRECISION NOT NULL, discount DOUBLE PRECISION DEFAULT NULL, total DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_D3D1D6932989F1FD (invoice_id), INDEX IDX_D3D1D693CB944F1A (student_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE newsletter_contact (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE person (id INT AUTO_INCREMENT NOT NULL, bank_id INT DEFAULT NULL, city_id INT DEFAULT NULL, dni VARCHAR(255) NOT NULL, discharge_date DATETIME DEFAULT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, phone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, payment INT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_34DCD17611C8FB41 (bank_id), INDEX IDX_34DCD1768BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE provider (id INT AUTO_INCREMENT NOT NULL, city_id INT DEFAULT NULL, tic VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, alias VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, payment_method INT DEFAULT 0 NOT NULL, iban_for_bank_draft_payment VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_92C4739C8BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE province (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE receipt (id INT AUTO_INCREMENT NOT NULL, student_id INT DEFAULT NULL, person_id INT DEFAULT NULL, date DATE DEFAULT NULL, is_payed TINYINT(1) DEFAULT \'0\', payment_date DATE DEFAULT NULL, is_sended TINYINT(1) DEFAULT \'0\', send_date DATE DEFAULT NULL, is_sepa_xml_generated TINYINT(1) DEFAULT \'0\', sepa_xml_generated_date DATE DEFAULT NULL, base_amount DOUBLE PRECISION DEFAULT NULL, discount_applied TINYINT(1) DEFAULT \'0\', month INT NOT NULL, year INT NOT NULL, is_for_private_lessons TINYINT(1) DEFAULT \'0\', created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_5399B645CB944F1A (student_id), INDEX IDX_5399B645217BBB47 (person_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE receipt_line (id INT AUTO_INCREMENT NOT NULL, receipt_id INT DEFAULT NULL, student_id INT DEFAULT NULL, description VARCHAR(255) NOT NULL, units DOUBLE PRECISION NOT NULL, price_unit DOUBLE PRECISION NOT NULL, discount DOUBLE PRECISION DEFAULT NULL, total DOUBLE PRECISION DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_476F8F7A2B5CA896 (receipt_id), INDEX IDX_476F8F7ACB944F1A (student_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, description TEXT DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, position INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spending (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, provider_id INT DEFAULT NULL, date DATE NOT NULL, description VARCHAR(255) DEFAULT NULL, base_amount DOUBLE PRECISION NOT NULL, is_payed TINYINT(1) DEFAULT NULL, payment_date DATE DEFAULT NULL, payment_method INT DEFAULT 0 NOT NULL, document VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_E44ECDD12469DE2 (category_id), INDEX IDX_E44ECDDA53A8AA (provider_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE spending_category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE student (id INT AUTO_INCREMENT NOT NULL, parent_id INT DEFAULT NULL, bank_id INT DEFAULT NULL, tariff_id INT DEFAULT NULL, city_id INT DEFAULT NULL, birth_date DATE NOT NULL, schedule VARCHAR(255) DEFAULT NULL, comments TEXT DEFAULT NULL, has_image_rights_accepted TINYINT(1) DEFAULT \'0\', has_sepa_agreement_accepted TINYINT(1) DEFAULT \'0\', is_payment_exempt TINYINT(1) DEFAULT \'0\', has_accepted_internal_regulations TINYINT(1) DEFAULT \'0\', discharge_date DATETIME DEFAULT NULL, dni VARCHAR(255) DEFAULT NULL, name VARCHAR(255) NOT NULL, surname VARCHAR(255) NOT NULL, phone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, address VARCHAR(255) DEFAULT NULL, payment INT DEFAULT 0 NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_B723AF33727ACA70 (parent_id), INDEX IDX_B723AF3311C8FB41 (bank_id), INDEX IDX_B723AF3392348FD2 (tariff_id), INDEX IDX_B723AF338BAC62AF (city_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE student_absence (id INT AUTO_INCREMENT NOT NULL, student_id INT DEFAULT NULL, day DATE NOT NULL, has_been_notified TINYINT(1) DEFAULT \'0\', notification_date DATETIME DEFAULT NULL, has_been_accepted TINYINT(1) DEFAULT \'0\', accepted_date DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_9B6C5531CB944F1A (student_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tariff (id INT AUTO_INCREMENT NOT NULL, year INT NOT NULL, price DOUBLE PRECISION NOT NULL, type INT DEFAULT 0 NOT NULL, name VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE teacher (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, color INT DEFAULT 0 NOT NULL, show_in_homepage TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, description TEXT DEFAULT NULL, image_name VARCHAR(255) DEFAULT NULL, position INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE teacher_absence (id INT AUTO_INCREMENT NOT NULL, teacher_id INT DEFAULT NULL, type INT DEFAULT 0 NOT NULL, day DATE NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, enabled TINYINT(1) NOT NULL, INDEX IDX_BB986D8841807E1D (teacher_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE admin_user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled TINYINT(1) NOT NULL, salt VARCHAR(255) DEFAULT NULL, password VARCHAR(255) NOT NULL, last_login DATETIME DEFAULT NULL, confirmation_token VARCHAR(180) DEFAULT NULL, password_requested_at DATETIME DEFAULT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', UNIQUE INDEX UNIQ_AD8A54A992FC23A8 (username_canonical), UNIQUE INDEX UNIQ_AD8A54A9A0D96FBF (email_canonical), UNIQUE INDEX UNIQ_AD8A54A9C05FB297 (confirmation_token), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bank ADD CONSTRAINT FK_D860BF7A217BBB47 FOREIGN KEY (person_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE city ADD CONSTRAINT FK_2D5B0234E946114A FOREIGN KEY (province_id) REFERENCES province (id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA741807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7FE54D947 FOREIGN KEY (group_id) REFERENCES class_group (id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA72DE62210 FOREIGN KEY (previous_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event ADD CONSTRAINT FK_3BAE0AA7AA23F6C8 FOREIGN KEY (next_id) REFERENCES event (id)');
        $this->addSql('ALTER TABLE event_student ADD CONSTRAINT FK_3274069C71F7E88B FOREIGN KEY (event_id) REFERENCES event (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE event_student ADD CONSTRAINT FK_3274069CCB944F1A FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_906517442B5CA896 FOREIGN KEY (receipt_id) REFERENCES receipt (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744CB944F1A FOREIGN KEY (student_id) REFERENCES student (id)');
        $this->addSql('ALTER TABLE invoice ADD CONSTRAINT FK_90651744217BBB47 FOREIGN KEY (person_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE invoice_line ADD CONSTRAINT FK_D3D1D6932989F1FD FOREIGN KEY (invoice_id) REFERENCES invoice (id)');
        $this->addSql('ALTER TABLE invoice_line ADD CONSTRAINT FK_D3D1D693CB944F1A FOREIGN KEY (student_id) REFERENCES student (id)');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD17611C8FB41 FOREIGN KEY (bank_id) REFERENCES bank (id)');
        $this->addSql('ALTER TABLE person ADD CONSTRAINT FK_34DCD1768BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE provider ADD CONSTRAINT FK_92C4739C8BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE receipt ADD CONSTRAINT FK_5399B645CB944F1A FOREIGN KEY (student_id) REFERENCES student (id)');
        $this->addSql('ALTER TABLE receipt ADD CONSTRAINT FK_5399B645217BBB47 FOREIGN KEY (person_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE receipt_line ADD CONSTRAINT FK_476F8F7A2B5CA896 FOREIGN KEY (receipt_id) REFERENCES receipt (id)');
        $this->addSql('ALTER TABLE receipt_line ADD CONSTRAINT FK_476F8F7ACB944F1A FOREIGN KEY (student_id) REFERENCES student (id)');
        $this->addSql('ALTER TABLE spending ADD CONSTRAINT FK_E44ECDD12469DE2 FOREIGN KEY (category_id) REFERENCES spending_category (id)');
        $this->addSql('ALTER TABLE spending ADD CONSTRAINT FK_E44ECDDA53A8AA FOREIGN KEY (provider_id) REFERENCES provider (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF33727ACA70 FOREIGN KEY (parent_id) REFERENCES person (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF3311C8FB41 FOREIGN KEY (bank_id) REFERENCES bank (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF3392348FD2 FOREIGN KEY (tariff_id) REFERENCES tariff (id)');
        $this->addSql('ALTER TABLE student ADD CONSTRAINT FK_B723AF338BAC62AF FOREIGN KEY (city_id) REFERENCES city (id)');
        $this->addSql('ALTER TABLE student_absence ADD CONSTRAINT FK_9B6C5531CB944F1A FOREIGN KEY (student_id) REFERENCES student (id)');
        $this->addSql('ALTER TABLE teacher_absence ADD CONSTRAINT FK_BB986D8841807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD17611C8FB41');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3311C8FB41');
        $this->addSql('ALTER TABLE person DROP FOREIGN KEY FK_34DCD1768BAC62AF');
        $this->addSql('ALTER TABLE provider DROP FOREIGN KEY FK_92C4739C8BAC62AF');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF338BAC62AF');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7FE54D947');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA72DE62210');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA7AA23F6C8');
        $this->addSql('ALTER TABLE event_student DROP FOREIGN KEY FK_3274069C71F7E88B');
        $this->addSql('ALTER TABLE invoice_line DROP FOREIGN KEY FK_D3D1D6932989F1FD');
        $this->addSql('ALTER TABLE bank DROP FOREIGN KEY FK_D860BF7A217BBB47');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744217BBB47');
        $this->addSql('ALTER TABLE receipt DROP FOREIGN KEY FK_5399B645217BBB47');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF33727ACA70');
        $this->addSql('ALTER TABLE spending DROP FOREIGN KEY FK_E44ECDDA53A8AA');
        $this->addSql('ALTER TABLE city DROP FOREIGN KEY FK_2D5B0234E946114A');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_906517442B5CA896');
        $this->addSql('ALTER TABLE receipt_line DROP FOREIGN KEY FK_476F8F7A2B5CA896');
        $this->addSql('ALTER TABLE spending DROP FOREIGN KEY FK_E44ECDD12469DE2');
        $this->addSql('ALTER TABLE event_student DROP FOREIGN KEY FK_3274069CCB944F1A');
        $this->addSql('ALTER TABLE invoice DROP FOREIGN KEY FK_90651744CB944F1A');
        $this->addSql('ALTER TABLE invoice_line DROP FOREIGN KEY FK_D3D1D693CB944F1A');
        $this->addSql('ALTER TABLE receipt DROP FOREIGN KEY FK_5399B645CB944F1A');
        $this->addSql('ALTER TABLE receipt_line DROP FOREIGN KEY FK_476F8F7ACB944F1A');
        $this->addSql('ALTER TABLE student_absence DROP FOREIGN KEY FK_9B6C5531CB944F1A');
        $this->addSql('ALTER TABLE student DROP FOREIGN KEY FK_B723AF3392348FD2');
        $this->addSql('ALTER TABLE event DROP FOREIGN KEY FK_3BAE0AA741807E1D');
        $this->addSql('ALTER TABLE teacher_absence DROP FOREIGN KEY FK_BB986D8841807E1D');
        $this->addSql('DROP TABLE bank');
        $this->addSql('DROP TABLE city');
        $this->addSql('DROP TABLE class_group');
        $this->addSql('DROP TABLE contact_message');
        $this->addSql('DROP TABLE event');
        $this->addSql('DROP TABLE event_student');
        $this->addSql('DROP TABLE invoice');
        $this->addSql('DROP TABLE invoice_line');
        $this->addSql('DROP TABLE newsletter_contact');
        $this->addSql('DROP TABLE person');
        $this->addSql('DROP TABLE provider');
        $this->addSql('DROP TABLE province');
        $this->addSql('DROP TABLE receipt');
        $this->addSql('DROP TABLE receipt_line');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE spending');
        $this->addSql('DROP TABLE spending_category');
        $this->addSql('DROP TABLE student');
        $this->addSql('DROP TABLE student_absence');
        $this->addSql('DROP TABLE tariff');
        $this->addSql('DROP TABLE teacher');
        $this->addSql('DROP TABLE teacher_absence');
        $this->addSql('DROP TABLE admin_user');
    }
}
