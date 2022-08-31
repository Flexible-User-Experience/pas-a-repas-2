Changelog
=========

##### Version 4.5.22 (WIP)
 * fix minor bugs
 * fix bad green color definition in drawTeacherColorSpan Twig extension
 * add HasAtLeastOneEventClassGroupAssignedFilter in Student admin

##### Version 4.5.21 (2021-11-26)
 * avoid SEPA receipts generation for empty units receipt case
 * composer dependecies update
 * yarn dependencies update

##### Version 4.5.20 (2021-11-09)
 * fix empty SEPA receipts problem

##### Version 4.5.19 (2021-11-09)
 * fix nullable Person problem in AbstractReceiptInvoice

##### Version 4.5.18 (2021-11-03)
 * replace bad academy in exported PDF file names
 * remove unnecessary ColorPickerBundle dependency

##### Version 4.5.17 (2021-11-03)
 * improve enums
 * reduce classrooms enum amount
 * fix missing green teacher color

##### Version 4.5.16 (2021-10-26)
 * fix charts problem related with date intervals

##### Version 4.5.15 (2021-10-26)
 * double dashboard charts timeline graph

##### Version 4.5.14 (2021-10-05)
 * fix problem with sepaXmlGeneratedDate datagrid filters

##### Version 4.5.13 (2021-09-30)
 * fix export problem
 * enable delete Recepit admin list button

##### Version 4.5.12 (2021-09-28)
 * fix fullcalendar bug on datesSet event
 * add roave/security-advisories dev dependency

##### Version 4.5.11 (2021-09-15)
 * replace GoogleCharts by ChartJS powered by SymfonyUX
 * replace 'callto' by 'tel' phone tags
 * add Whatsapp contact message button
 * upgrade fullcalendar.js up to version 5
 * remove public GoogleApi key from code

##### Version 4.5.10 (2021-09-13)
 * remove duplicated frontend layout template
 * add missing Sitemap blog route paths
 * add frontend thank you page template

##### Version 4.5.09 (2021-09-13)
 * allow to remove Student absences from admin list
 * fix problem with unnecessary created Student absences from EventAdmin edit view

##### Version 4.5.08 (2021-09-13)
 * fix problem during batch delete on unique events (not chained)
 * remove unnecessary console log from Stimulus controllers
 * include complied yarn assets to avoid deploy problem

##### Version 4.5.07 (2021-09-13)
 * fix Doctrine schema validation
 * fix missing admin translations
 * add events-student-assistance Stimulus controller
 * enable rotating logs in production

##### Version 4.5.06 (2021-09-10)
 * improve Notification service email subjects
 * fix row overflow on empty classroom in ExportCalendarToListBuilderPdf

##### Version 4.5.05 (2021-09-10)
 * finish Blog module
 * delete pre-register inscriptions management
 * remove newsletter contacts management
 * fix problem sending email

##### Version 4.5.04 (2021-09-09)
 * Symfony 4.4.30 update
 * final styles version
 * final dynamic sitemap builder version
 * show Blog posts
 * replace Less by Sass processor
 * fix Travis broken tests
 * add ExportCalendarToList behaviour
 * fix missing translations
 * add school year filter

##### Version 4.5.03 (2021-01-31)
 * Symfony 4.4.19 update
 * fix not editable invoice date admin
 * fix missing translations

##### Version 4.5.02 (2021-01-23)
 * fix broken testing suite

##### Version 4.5.01 (2021-01-23)
 * fix expenses calculation in dashboard graph

##### Version 4.5.00 (2021-01-15)
 * add genereta first SEPA payment info
 * add new duplicate Invoice admin action
 * add frontend blog post page tests

##### Version 4.4.00 (2020-11-13)
 * add BlogCategory admin
 * add BlogPost admin
 * set recurring direct debit in a number of direct debits RCUR
 * remove Student name from Invoice PDF

##### Version 4.3.01 (2020-10-11)
 * remove removeAt default attr in all entities
 * decouple hardcoded brand phone numbers

##### Version 4.3.00 (2020-10-05)
 * enable Bank account number validation
 * remove some hardcoded customer brand data
 * improve dev mailer config

##### Version 4.2.06 (2020-10-04)
 * composer update
 * yarn upgrade
 * fix chart overflow in admin dashboard panel

##### Version 4.2.05 (2020-09-29)
 * remove preregister module from frontend top menu conditionally

##### Version 4.2.04 (2020-09-29)
 * Symfony 4.4.13 update

##### Version 4.2.03 (2020-09-25)
 * fix Students admin remove to erase previously related receipt and invoice relations

##### Version 4.2.02 (2020-09-19)
 * make XML SEPA generation less strict
 * remove unnecessary maker bundle

##### Version 4.2.01 (2020-09-15)
 * fix SonataUser role admin problem
 * composer & node vendors update

##### Version 4.2.00 (2020-09-13)
 * add admin conditonal delete student button & action

##### Version 4.1.10 (2020-09-09)
 * fix missing EWZRecaptcha Twig form template config
 * fix broken testing suite

##### Version 4.1.09 (2020-09-07)
 * Symfony 4.4.13 security update
 * Remove deprecated SonataCore bundle

##### Version 4.1.08 (2020-08-08)
 * Symfony 4.4.11 update
 * SonataUserBundle 4.7.0 update
 * fix problem to avoid problem storing emoji unicodes into MySQL

##### Version 4.1.07 (2020-06-26)
 * fix problem with null dates converted to string
 * fix typo

##### Version 4.1.06 (2020-06-25)
 * remove frontend PreRegister summer tab
 * enable frontend PreRegister september tab

##### Version 4.1.05 (2020-06-08)
 * yarn upgrade
 * fix Invoice mailer notification problem
 * fix mailer config problem

##### Version 4.1.04 (2020-06-06)
 * vendors update
 * annotate Receipt batch action problem on large input forms

##### Version 4.1.03 (2020-06-01)
 * remove frontend PreRegister september tab

##### Version 4.1.02 (2020-05-27)
 * make contact message admin management available to ROLE_MANAGER

##### Version 4.1.01 (2020-05-27)
 * finish new pre register form feature

##### Version 4.1.00 (2020-05-26)
 * add new pre register form feature

##### Version 4.0.00 (2020-05-23)
 * finish migration from Symfony 2.8

##### Version 0.0.05 (2020-05-23)
 * finish new vendors config after upgrade process

##### Version 0.0.04 (2020-05-21)
 * config new vendors after upgrade process

##### Version 0.0.03 (2020-05-20)
 * fix bad references after Symfony 2.8 migration

##### Version 0.0.02 (2020-05-15)
 * migrations from Symfony 2.8
 
##### Version 0.0.01 (2020-05-13)
 * create Symfony 4.4 LTS empty project
