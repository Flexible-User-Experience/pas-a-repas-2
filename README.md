Pas a Repàs
===========

A Symfony 5.4 LTS project to manage [Pas a Repàs](https://www.pasarepas.cat) website content with custom ERP integrated functionalities.

---

#### Installation requirements

* PHP 8.0
* MySQL 8.0
* Git 2.0
* Composer 2.0
* Yarn 1.22
* set php.ini config max_input_vars > 10.000

#### Installation instructions

```bash
$ git clone git@github.com:Flexible-User-Experience/pas-a-repas-2.git pas-a-repas-2
$ cd pas-a-repas-2
$ cp env.dist .env
$ nano .env
$ composer install
$ yarn install
```

Remember to edit `.env` config file according to your system environment needs.

#### Testing suite commands

```bash
$ ./scripts/developer-tools/test-database-reset.sh
$ ./scripts/developer-tools/run-test.sh
```
