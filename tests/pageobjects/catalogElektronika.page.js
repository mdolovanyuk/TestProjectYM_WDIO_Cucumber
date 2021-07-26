const Page = require('../pageobjects/page');

class CatalogElektronikaPage {
    get refTV () { return $('//a[text() = "Телевизоры"]') }

    goToTV (){
        Page.pauseForCapcha();
        this.refTV.click();
    }
}

module.exports = new CatalogElektronikaPage();