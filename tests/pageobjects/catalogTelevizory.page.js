const Page = require('../pageobjects/page');

class CatalogTelevizoryPage {
    get priceFrom () {return $('#glpricefrom')}
    get makerLG () {return $('//span[text()="LG"]')}
    get makerSamsung () {return $('//span[text()="Samsung"]')}
    get firstItem () { return $('//h3/a/span')}

    inputPriceFrom (priceFrom) {
        Page.pauseForCapcha();
        this.priceFrom.setValue(priceFrom);
    }

    setFlagMaker (makers) {
        Page.pauseForCapcha();
        let i;
        for (i=0; i<makers.length; i++)
            switch (makers[i]) {
                case 'LG':
                    this.makerLG.click();
                    break;
                case 'Samsung':
                    this.makerSamsung.click();
            }
    }

    goToFirstItem () {
        Page.pauseForCapcha();
        this.firstItem.waitForClickable({timeout: 10000});
        this.firstItem.click();
        Page.switchNewPage();
    }
}

module.exports = new CatalogTelevizoryPage();