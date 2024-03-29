<?php

namespace App\Controller;

use App\Entity\BlogCategory;
use App\Entity\BlogPost;
use App\Enum\UserRolesEnum;
use App\Repository\BlogCategoryRepository;
use App\Repository\BlogPostRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

class BlogController extends AbstractController
{
    public const PAGE_LIMIT = 5;

    /**
     * @Route("/blog/{pagina}", name="app_blog")
     */
    public function postsListAction(BlogPostRepository $bpr, BlogCategoryRepository $bcr, PaginatorInterface $paginator, $pagina = 1): Response
    {
        $posts = $bpr->getAllEnabledSortedByPublishedDateWithJoinUntilNowQ();
        $postsPaginator = $paginator->paginate($posts, $pagina, self::PAGE_LIMIT);
        $categories = $bcr->getAllEnabledSortedByTitleWithJoin();

        return $this->render('Front/blog/blog.html.twig', array(
            'posts' => $postsPaginator,
            'categories' => $categories,
        ));
    }

    /**
     * @Route("/blog/{year}/{month}/{day}/{slug}", name="app_blog_detail")
     */
    public function postDetailAction(BlogPostRepository $bpr, BlogCategoryRepository $bcr, Security $security, $year, $month, $day, $slug): Response
    {
        /** @var BlogPost $post */
        $post = $bpr->findOneBySlug($slug);
        $categories = $bcr->getAllEnabledSortedByTitleWithJoin();
        if (!$post) {
            throw $this->createNotFoundException('Unable to find Post entity.');
        }
        if (!$post->getEnabled() && !$security->isGranted(UserRolesEnum::ROLE_CMS)) {
            throw $this->createNotFoundException('Unable to find Post entity.');
        }
        if ($post->getPublishedAt()->format('Y-m-d') !== $year . '-' . $month . '-' . $day) {
            throw $this->createNotFoundException('Wrong Post entity published date');
        }

        return $this->render('Front/blog/blog_detail.html.twig', array(
            'post' => $post,
            'categories' => $categories,
        ));
    }

    /**
     * @Route("/blog/categoria/{slug}/{pagina}", name="app_blog_category_detail")
     */
    public function categoryDetailAction(BlogPostRepository $bpr, BlogCategoryRepository $bcr, PaginatorInterface $paginator, $slug, $pagina = 1): Response
    {
        /** @var BlogCategory $category */
        $category = $bcr->findOneBySlug($slug);
        if (!$category || !$category->getEnabled()) {
            throw $this->createNotFoundException('Unable to find Category entity.');
        }
        $categories = $bcr->getAllEnabledSortedByTitleWithJoin();
        $posts = $bpr->getPostsByCategoryEnabledSortedByPublishedDateWithJoinUntilNow($category);
        $postsPaginator = $paginator->paginate($posts, $pagina, self::PAGE_LIMIT);

        return $this->render('Front/blog/category_detail.html.twig', array(
            'selectedCategory' => $category,
            'posts' => $postsPaginator,
            'categories' => $categories,
        ));
    }
}
