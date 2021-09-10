<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210910154543 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE admin_group CHANGE name name VARCHAR(180) NOT NULL');
        $this->addSql('ALTER TABLE admin_user CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('ALTER TABLE blog_category CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('DROP INDEX uniq_64c19c12b36786b ON blog_category');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_72113DE62B36786B ON blog_category (title)');
        $this->addSql('ALTER TABLE blog_post CHANGE updated_at updated_at DATETIME DEFAULT NULL, CHANGE description description TEXT DEFAULT NULL');
        $this->addSql('DROP INDEX uniq_5a8a6c8d2b36786b ON blog_post');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_BA5AE01D2B36786B ON blog_post (title)');
        $this->addSql('ALTER TABLE blog_post_blog_category DROP FOREIGN KEY FK_B9A1906012469DE2');
        $this->addSql('ALTER TABLE blog_post_blog_category DROP FOREIGN KEY FK_B9A190604B89032C');
        $this->addSql('DROP INDEX idx_b9a190604b89032c ON blog_post_blog_category');
        $this->addSql('CREATE INDEX IDX_C9F85ADCA77FBEAF ON blog_post_blog_category (blog_post_id)');
        $this->addSql('DROP INDEX idx_b9a1906012469de2 ON blog_post_blog_category');
        $this->addSql('CREATE INDEX IDX_C9F85ADCCB76011C ON blog_post_blog_category (blog_category_id)');
        $this->addSql('ALTER TABLE blog_post_blog_category ADD CONSTRAINT FK_B9A1906012469DE2 FOREIGN KEY (blog_category_id) REFERENCES blog_category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE blog_post_blog_category ADD CONSTRAINT FK_B9A190604B89032C FOREIGN KEY (blog_post_id) REFERENCES blog_post (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact_message CHANGE description description TEXT DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE admin_group CHANGE name name VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`');
        $this->addSql('ALTER TABLE admin_user CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE blog_category CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('DROP INDEX uniq_72113de62b36786b ON blog_category');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_64C19C12B36786B ON blog_category (title)');
        $this->addSql('ALTER TABLE blog_post CHANGE updated_at updated_at DATETIME NOT NULL, CHANGE description description TEXT CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`');
        $this->addSql('DROP INDEX uniq_ba5ae01d2b36786b ON blog_post');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_5A8A6C8D2B36786B ON blog_post (title)');
        $this->addSql('ALTER TABLE blog_post_blog_category DROP FOREIGN KEY FK_C9F85ADCA77FBEAF');
        $this->addSql('ALTER TABLE blog_post_blog_category DROP FOREIGN KEY FK_C9F85ADCCB76011C');
        $this->addSql('DROP INDEX idx_c9f85adccb76011c ON blog_post_blog_category');
        $this->addSql('CREATE INDEX IDX_B9A1906012469DE2 ON blog_post_blog_category (blog_category_id)');
        $this->addSql('DROP INDEX idx_c9f85adca77fbeaf ON blog_post_blog_category');
        $this->addSql('CREATE INDEX IDX_B9A190604B89032C ON blog_post_blog_category (blog_post_id)');
        $this->addSql('ALTER TABLE blog_post_blog_category ADD CONSTRAINT FK_C9F85ADCA77FBEAF FOREIGN KEY (blog_post_id) REFERENCES blog_post (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE blog_post_blog_category ADD CONSTRAINT FK_C9F85ADCCB76011C FOREIGN KEY (blog_category_id) REFERENCES blog_category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE contact_message CHANGE description description TEXT CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`');
    }
}
