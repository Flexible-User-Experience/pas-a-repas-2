<?php

namespace App\Admin;

use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Route\RouteCollection;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Vich\UploaderBundle\Templating\Helper\UploaderHelper;

/**
 * Class BaseAdmin.
 *
 * @category Admin
 */
abstract class AbstractBaseAdmin extends AbstractAdmin
{
    private UploaderHelper $vus;
    private CacheManager $lis;

    /**
     * @param string         $code
     * @param string         $class
     * @param string         $baseControllerName
     * @param UploaderHelper $vus
     * @param CacheManager   $lis
     */
    public function __construct($code, $class, $baseControllerName, UploaderHelper $vus, CacheManager $lis)
    {
        parent::__construct($code, $class, $baseControllerName);
        $this->vus = $vus;
        $this->lis = $lis;
    }

    /**
     * @var array
     */
    protected $perPageOptions = array(25, 50, 100, 200, 400);

    /**
     * @var int
     */
    protected $maxPerPage = 25;

    /**
     * Configure route collection.
     *
     * @param RouteCollection $collection
     */
    protected function configureRoutes(RouteCollection $collection)
    {
        $collection
            ->remove('show')
            ->remove('batch');
    }

    /**
     * Remove batch action list view first column.
     *
     * @return array
     */
    public function getBatchActions(): array
    {
        $actions = parent::getBatchActions();
        unset($actions['delete']);

        return $actions;
    }

    /**
     * Get export formats.
     *
     * @return array
     */
    public function getExportFormats(): array
    {
        return array(
            'csv',
            'xls',
        );
    }

    /**
     * @param string $bootstrapGrid
     * @param string $bootstrapSize
     * @param string $boxClass
     *
     * @return array
     */
    protected function getDefaultFormBoxArray($bootstrapGrid = 'md', $bootstrapSize = '6', $boxClass = 'primary'): array
    {
        return array(
            'class' => 'col-'.$bootstrapGrid.'-'.$bootstrapSize,
            'box_class' => 'box box-'.$boxClass,
        );
    }

    /**
     * @param string $bootstrapColSize
     *
     * @return array
     */
    protected function getFormMdSuccessBoxArray($bootstrapColSize = '6'): array
    {
        return $this->getDefaultFormBoxArray('md', $bootstrapColSize, 'success');
    }

    /**
     * Get image helper form mapper with thumbnail.
     *
     * @return string
     */
    protected function getImageHelperFormMapperWithThumbnail(): string
    {
        return ($this->getSubject() ? $this->getSubject()->getImageName() ? '<img src="'.$this->lis->getBrowserPath(
                    $this->vus->asset($this->getSubject(), 'imageFile'),
                    '480xY'
                ).'" class="admin-preview img-responsive" alt="thumbnail"/>' : '' : '').'<span style="width:100%;display:block;">amplada mínima 1200px (màx. 10MB amb JPG o PNG)</span>';
    }

    /**
     * Get image helper form mapper with thumbnail for black&white.
     *
     * @return string
     */
    protected function getImageHelperFormMapperWithThumbnailBW(): string
    {
        return ($this->getSubject() ? $this->getSubject()->getImageNameBW() ? '<img src="'.$this->lis->getBrowserPath(
                    $this->vus->asset($this->getSubject(), 'imageFileBW'),
                    '480xY'
                ).'" class="admin-preview img-responsive" alt="thumbnail"/>' : '' : '').'<span style="width:100%;display:block;">amplada mínima 1200px (màx. 10MB amb JPG o PNG)</span>';
    }

    /**
     * @return string
     */
    protected function getImageHelperFormMapperWithThumbnailGif(): string
    {
        return ($this->getSubject() ? $this->getSubject()->getGifName() ? '<img src="'.$this->lis->getBrowserPath(
                    $this->vus->asset($this->getSubject(), 'gifFile'),
                    '480xY'
                ).'" class="admin-preview img-responsive" alt="thumbnail"/>' : '' : '').'<span style="width:100%;display:block;">mida 780x1168px (màx. 10MB amb GIF)</span>';
    }

    /**
     * @return string
     */
    protected function getImageHelperFormMapperWithThumbnailAspectRatio(): string
    {
        return ($this->getSubject() ? $this->getSubject()->getImageName() ? '<img src="'.$this->lis->getBrowserPath(
                    $this->vus->asset($this->getSubject(), 'imageFile'),
                    '480xY'
                ).'" class="admin-preview img-responsive" alt="thumbnail"/>' : '' : '').'<span style="width:100%;display:block;">Les imatges han de ser verticals i amplada mínima 600px (màx. 10MB)</span>';
    }

    /**
     * Get image helper form mapper with thumbnail.
     *
     * @param string $attribute
     * @param string $uploaderMapping
     *
     * @return string
     *
     * @throws \Twig\Error\Error
     */
    protected function getSmartHelper($attribute, $uploaderMapping): string
    {
        $fs = $this->getConfigurationPool()->getContainer()->get('app.file_service');
        $tes = $this->getConfigurationPool()->getContainer()->get('twig');

        if ($this->getSubject() && $this->getSubject()->$attribute()) {
            if ($fs->isPdf($this->getSubject(), $uploaderMapping)) {
                // PDF case
                return $tes->render('Admin/Helpers/pdf.html.twig', [
                    'attribute' => $this->getSubject()->$attribute(),
                    'subject' => $this->getSubject(),
                    'uploaderMapping' => $uploaderMapping,
                ]);
            } else {
                // Image case
                return $tes->render('Admin/Helpers/image.html.twig', [
                    'attribute' => $this->getSubject()->$attribute(),
                    'subject' => $this->getSubject(),
                    'uploaderMapping' => $uploaderMapping,
                ]);
            }
        } else {
            // Undefined case
            return '<span style="width:100%;display:block;">Pots adjuntar un PDF o una imatge. Pes màxim 10MB.</span>';
        }
    }
}
