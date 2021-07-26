const Page = require('../pageobjects/page');

class ProductTelevizorPage {
    get price() { return $('//div[starts-with(@class, "_3NaXxl-HYN _3kWlKUNlTg")]/span/span')}
    get maker() { return $('//meta[@content = "2"]/following-sibling::div/a/span')}

    getPrice () {
        Page.pauseForCapcha();
        return parseInt(String(this.price.getText()).replace(/\s/g, ''));
    }

    getMaker () {
        return this.maker.getText();
    }
}

module.exports = new ProductTelevizorPage();