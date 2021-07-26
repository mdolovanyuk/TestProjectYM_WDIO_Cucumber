const Page = require('../pageobjects/page');
const YandexMarketPage = require('../pageobjects/yandexMarket.page');
const CatalogElektronikaPage = require('../pageobjects/catalogElektronika.page');
const CatalogTelevizoryPage = require('../pageobjects/catalogTelevizory.page');
const ProductTelevizorPage = require ('../pageobjects/productTelevizor.page');
const assert = require('chai').assert;
const {Given, When, Then} = require('@cucumber/cucumber')

Given('открыт сайт market.yandex.ru, раздел - Электроника, подраздел - Телевизоры', function () {
  Page.open('https://market.yandex.ru/');
  YandexMarketPage.goToElektronika();
  CatalogElektronikaPage.goToTV();
})

When(/^указать Цена от - (\d*), Производитель - (.*)$/, function (price, maker) {
  CatalogTelevizoryPage.inputPriceFrom(price);
  let makers = maker.split(', ');
  CatalogTelevizoryPage.setFlagMaker(makers);
})

When('перейти на страницу первой найденной модели', function () {
  CatalogTelevizoryPage.goToFirstItem();
})

Then(/^на открывшейся странице цена больше или равна (\d*)$/, function (price) {
  assert.isAtLeast(ProductTelevizorPage.getPrice(), parseInt(price), "Цена найденного телевизора не соответствует условию поиска");
})

Then(/^производитель входит в список - (.*)$/, function (maker) {
  assert.include(maker, ProductTelevizorPage.getMaker(), "Производитель найденного телевизора не соответствует условию поиска");
})
