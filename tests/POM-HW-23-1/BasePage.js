export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async clickButton(locator) {
        await this.page.locator(locator).click();
    }

    async fillField(locator, value) {
        await this.page.locator(locator).fill(value);
    }
}
