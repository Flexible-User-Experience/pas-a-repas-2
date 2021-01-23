<?php

namespace App\Listener;

use DateTimeInterface;
use Presta\SitemapBundle\Event\SitemapPopulateEvent;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;

class SitemapListener implements EventSubscriberInterface
{
    private RouterInterface $router;

    public function __construct(RouterInterface $router)
    {
        $this->router = $router;
    }

    /**
     * @inheritdoc
     */
    public static function getSubscribedEvents()
    {
        return [
            SitemapPopulateEvent::ON_SITEMAP_POPULATE => 'populateSitemap',
        ];
    }

    /**
     * @param SitemapPopulateEvent $event
     */
    public function populateSitemap(SitemapPopulateEvent $event)
    {
        $section = $event->getSection();
        if (is_null($section) || $section === 'default') {
            // Homepage
            $url = $this->makeUrl('app_homepage');
            $event
                ->getUrlContainer()
                ->addUrl($this->makeUrlConcrete($url), 'default');
            // Privacy Policy view
            $url = $this->makeUrl('app_privacy_policy');
            $event
                ->getUrlContainer()
                ->addUrl($this->makeUrlConcrete($url, 0.1), 'default');
            // Credits view
            $url = $this->makeUrl('app_credits');
            $event
                ->getUrlContainer()
                ->addUrl($this->makeUrlConcrete($url, 0.1), 'default');
        }
    }

    /**
     * @param string $routeName
     *
     * @return string
     */
    private function makeUrl(string $routeName): string
    {
        return $this->router->generate(
            $routeName, array(), UrlGeneratorInterface::ABSOLUTE_URL
        );
    }

    /**
     * @param string $url
     * @param int $priority
     * @param DateTimeInterface|null $date
     *
     * @return UrlConcrete
     */
    private function makeUrlConcrete(string $url, int $priority = 1, ?DateTimeInterface $date = null): UrlConcrete
    {
        return new UrlConcrete(
            $url,
            $date ?? new \DateTime(),
            UrlConcrete::CHANGEFREQ_WEEKLY,
            $priority
        );
    }
}
