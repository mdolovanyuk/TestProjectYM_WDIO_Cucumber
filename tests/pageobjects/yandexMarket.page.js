const Page = require('../pageobjects/page');

class YandexMarketPage {

    //выбор региона Москва
    get btnRegion() { return $('._1KpjX8xME8._3UND8GjCtL[data-tid-prop="99fc66c"]')}
    get inputRegion() { return $('input[placeholder="Укажите другой регион"]')}
    get mscRegion() { return $('a[data-tid="95d685a1"]')}
    get submitRegion() { return $('button[type="submit"][data-tid-prop="42de86b"]')}

    get testInit() { return $('//трололо')}

    get refElektronika () { return $('//span[text()="Электроника"]/parent::a') }

    goToElektronika () {
        Page.pauseForCapcha();
        this.refElektronika.click();
    }

    selectRegionMsc() {
            this.btnRegion.click();
            this.inputRegion.setValue('Москва');
            this.mscRegion.click();
            this.submitRegion.click();
        }
}

module.exports = new YandexMarketPage();