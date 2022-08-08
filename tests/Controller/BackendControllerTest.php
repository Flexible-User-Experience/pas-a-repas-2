<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class BackendControllerTest extends WebTestCase
{
    /**
     * Test admin login request is successful.
     */
    public function testAdminLoginPageIsSuccessful(): void
    {
        $client = WebTestCase::createClient();
        $client->request('GET', '/admin/login');

        self::assertResponseIsSuccessful();
    }

    /**
     * Test HTTP request is successful.
     *
     * @dataProvider provideSuccessfulUrls
     */
    public function testAdminPagesAreSuccessful(string $url): void
    {
        $client = $this->getAuthenticatedClient();
        $client->request('GET', $url);

        self::assertResponseIsSuccessful();
    }

    /**
     * Successful Urls provider.
     *
     * @return array
     */
    public function provideSuccessfulUrls(): array
    {
        return array(
            array('/admin/dashboard'),
            array('/admin/contacts/message/list'),
            array('/admin/contacts/message/1/show'),
            array('/admin/contacts/message/1/answer'),
            array('/admin/contacts/message/1/delete'),
            array('/admin/teachers/teacher/list'),
            array('/admin/teachers/teacher/create'),
            array('/admin/teachers/teacher/1/edit'),
            array('/admin/teachers/teacher/1/detail'),
            array('/admin/teachers/absence/list'),
            array('/admin/teachers/absence/create'),
            array('/admin/teachers/absence/1/edit'),
            array('/admin/students/student/list'),
            array('/admin/students/student/create'),
            array('/admin/students/student/1/edit'),
            array('/admin/students/student/1/show'),
            array('/admin/students/student/1/delete'),
            array('/admin/students/absence/list'),
            array('/admin/students/absence/create'),
            array('/admin/students/absence/1/edit'),
            array('/admin/students/parent/list'),
            array('/admin/students/parent/create'),
            array('/admin/students/parent/1/edit'),
            array('/admin/administrations/province/list'),
            array('/admin/administrations/province/create'),
            array('/admin/administrations/province/1/edit'),
            array('/admin/administrations/city/list'),
            array('/admin/administrations/city/create'),
            array('/admin/administrations/city/1/edit'),
            array('/admin/administrations/bank/list'),
            array('/admin/administrations/bank/create'),
            array('/admin/administrations/bank/1/delete'),
            array('/admin/administrations/bank/1/edit'),
            array('/admin/classrooms/group/list'),
            array('/admin/classrooms/group/create'),
            array('/admin/classrooms/group/1/edit'),
            array('/admin/classrooms/timetable/list'),
            array('/admin/classrooms/timetable/create'),
            array('/admin/classrooms/timetable/1/edit'),
            array('/admin/classrooms/timetable/1/batch-edit'),
            array('/admin/classrooms/timetable/1/batch-delete'),
            array('/admin/billings/tariff/list'),
            array('/admin/billings/tariff/create'),
            array('/admin/billings/tariff/1/edit'),
            array('/admin/billings/receipt/list'),
            array('/admin/billings/receipt/create'),
            array('/admin/billings/receipt/generate'),
            array('/admin/billings/receipt/1/edit'),
            array('/admin/billings/receipt/1/delete'),
            array('/admin/billings/receipt-line/list'),
            array('/admin/billings/receipt-line/create'),
            array('/admin/billings/receipt-line/1/edit'),
            array('/admin/billings/invoice/list'),
            array('/admin/billings/invoice/create'),
            array('/admin/billings/invoice/1/edit'),
            array('/admin/billings/invoice/1/delete'),
            array('/admin/billings/invoice-line/list'),
            array('/admin/billings/invoice-line/create'),
            array('/admin/billings/invoice-line/1/edit'),
            array('/admin/purchases/provider/list'),
            array('/admin/purchases/provider/create'),
            array('/admin/purchases/provider/1/edit'),
            array('/admin/purchases/spending-category/list'),
            array('/admin/purchases/spending-category/create'),
            array('/admin/purchases/spending-category/1/edit'),
            array('/admin/purchases/spending-category/1/delete'),
            array('/admin/purchases/spending/list'),
            array('/admin/purchases/spending/create'),
            array('/admin/purchases/spending/1/edit'),
            array('/admin/purchases/spending/1/delete'),
            array('/admin/web/blog-category/list'),
            array('/admin/web/blog-category/create'),
            array('/admin/web/blog-category/1/edit'),
            array('/admin/web/blog-category/1/delete'),
            array('/admin/web/blog-category/1/show'),
            array('/admin/web/blog-post/list'),
            array('/admin/web/blog-post/create'),
            array('/admin/web/blog-post/1/edit'),
            array('/admin/web/blog-post/1/delete'),
            array('/admin/users/list'),
            array('/admin/users/create'),
            array('/admin/users/1/edit'),
            array('/admin/users/1/delete'),
            array('/admin/fitxers/gestor'),
            array('/admin/fitxers/gestor/handler/?conf=default'),
        );
    }

    /**
     * Test HTTP request is not found.
     *
     * @dataProvider provideNotFoundUrls
     */
    public function testAdminPagesAreNotFound(string $url): void
    {
        $client = $this->getAuthenticatedClient();
        $client->request('GET', $url);

        self::assertResponseStatusCodeSame(404);
    }

    /**
     * Not found Urls provider.
     *
     * @return array
     */
    public function provideNotFoundUrls(): array
    {
        return array(
            array('/admin/contacts/message/create'),
            array('/admin/contacts/message/1/edit'),
            array('/admin/contacts/message/batch'),
            array('/admin/teachers/teacher/1/delete'),
            array('/admin/teachers/teacher/batch'),
            array('/admin/teachers/absence/batch'),
            array('/admin/teachers/absence/1/delete'),
            array('/admin/students/student/batch'),
            array('/admin/students/absence/batch'),
            array('/admin/students/absence/1/delete'),
            array('/admin/students/parent/1/delete'),
            array('/admin/students/parent/1/show'),
            array('/admin/administrations/province/batch'),
            array('/admin/administrations/province/1/delete'),
            array('/admin/administrations/city/1/delete'),
            array('/admin/classrooms/group/1/delete'),
            array('/admin/classrooms/tariff/1/delete'),
            array('/admin/classrooms/timetable/1/delete'),
            array('/admin/billings/invoice/generate'),
            array('/admin/purchases/provider/batch'),
            array('/admin/purchases/provider/1/show'),
            array('/admin/purchases/provider/1/delete'),
            array('/admin/purchases/spending-category/batch'),
            array('/admin/purchases/spending-category/1/show'),
            array('/admin/purchases/spending/batch'),
            array('/admin/purchases/spending/1/show'),
            array('/admin/web/blog-category/batch'),
            array('/admin/web/blog-post/batch'),
            array('/admin/web/blog-post/1/show'),
        );
    }

    private function getAuthenticatedClient(): KernelBrowser
    {
        return WebTestCase::createClient([], [
            'PHP_AUTH_USER' => 'admin',
            'PHP_AUTH_PW'   => 'passwd',
        ]);
    }
}
