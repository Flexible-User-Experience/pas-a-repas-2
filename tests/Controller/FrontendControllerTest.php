<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class FrontendControllerTest extends WebTestCase
{
    /**
     * Test HTTP request is successful
     *
     * @dataProvider provideSuccessfulUrls
     * @param string $url
     */
    public function testPagesAreSuccessful(string $url)
    {
        $client = WebTestCase::createClient();
        $client->request('GET', $url);

        $this->assertResponseIsSuccessful();
    }

    /**
     * Successful Urls provider
     *
     * @return array
     */
    public function provideSuccessfulUrls()
    {
        return array(
            array('/'),
            array('/politica-de-privacitat'),
            array('/credits'),
            array('/sitemap/sitemap.default.xml'),
        );
    }

    /**
     * Test HTTP request is not found
     *
     * @dataProvider provideNotFoundUrls
     * @param string $url
     */
    public function testPagesAreNotFound(string $url)
    {
        $client = WebTestCase::createClient();
        $client->request('GET', $url);

        $this->assertResponseStatusCodeSame(404);
    }

    /**
     * Not found Urls provider
     *
     * @return array
     */
    public function provideNotFoundUrls()
    {
        return array(
            array('/pagina-trenacada'),
            array('/pagina-rota'),
            array('/broken-page'),
        );
    }
}
