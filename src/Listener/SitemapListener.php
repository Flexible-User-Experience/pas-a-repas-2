<?php

namespace App\Listener;

use App\Entity\BlogCategory;
use App\Entity\BlogPost;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\ORM\EntityManagerInterface;
use Presta\SitemapBundle\Event\SitemapPopulateEvent;
use Presta\SitemapBundle\Sitemap\Url\UrlConcrete;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RouterInterface;

class SitemapListener implements EventSubscriberInterface
{
    private RouterInterface $router;
    private EntityManagerInterface $entityManager;

    public function __construct(RouterInterface $router, EntityManagerInterface $entityManager)
    {
        $this->router = $router;
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            SitemapPopulateEvent::class => 'populate',
        ];
    }

    public function populate(SitemapPopulateEvent $event): void
    {
        $section = $event->getSection();
        if (is_null($section) || 'default' === $section) {
            // Homepage
            $url = $this->makeUrl('app_homepage');
            $event
                ->getUrlContainer()
                ->addUrl($this->makeUrlConcrete($url), 'default');
            $posts = $this->entityManager->getRepository(BlogPost::class)->getAllEnabledSortedByPublishedDate();
            /** @var BlogPost $post */
            foreach ($posts as $post) {
                $url = $this->makeUrl('app_blog_detail', [
                    'year' => $post->getPublishedAt()->format('Y'),
                    'month' => $post->getPublishedAt()->format('m'),
                    'day' => $post->getPublishedAt()->format('d'),
                    'slug' => $post->getSlug(),
                ]);
                $event
                    ->getUrlContainer()
                    ->addUrl($this->makeUrlConcrete($url), 'default');
            }
            $categories = $this->entityManager->getRepository(BlogCategory::class)->getAllEnabledSortedByTitle();
            /** @var BlogCategory $category */
            foreach ($categories as $category) {
                $url = $this->makeUrl('app_blog_category_detail', [
                    'slug' => $category->getSlug(),
                ]);
                $event
                    ->getUrlContainer()
                    ->addUrl($this->makeUrlConcrete($url), 'default');
            }
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

    private function makeUrl(string $routeName, array $routeParameters = []): string
    {
        return $this->router->generate(
            $routeName, $routeParameters, UrlGeneratorInterface::ABSOLUTE_URL
        );
    }

    private function makeUrlConcrete(string $url, int $priority = 1, ?DateTimeInterface $date = null): UrlConcrete
    {
        return new UrlConcrete(
            $url,
            $date ?? new DateTimeImmutable(),
            UrlConcrete::CHANGEFREQ_WEEKLY,
            $priority
        );
    }
}
