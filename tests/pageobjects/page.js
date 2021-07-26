class Page {
    get capcha () { return $('//div[@class="CheckboxCaptcha-Anchor"]')}

    open (path) {
        browser.url(path);
    }

    switchNewPage () {
        const windows = browser.getWindowHandles();
        browser.switchToWindow(windows[windows.length-1]);
    }

    pauseForCapcha() {
        if (this.capcha.isExisting()) {
            this.capcha.click();
            browser.pause(30000);
        }
    }
}

module.exports = new Page();