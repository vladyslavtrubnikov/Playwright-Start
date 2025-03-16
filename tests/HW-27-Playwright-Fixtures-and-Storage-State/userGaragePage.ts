import { Page, expect } from '@playwright/test';

export class GaragePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('/panel/garage');
        await expect(this.page).toHaveURL(/\/panel\/garage/);
    }

    async addCar(brand: any, model: any, mileage: any) {
        await this.page.click('button:has-text("Add car")');
        await this.page.locator('select[name="carBrandId"]').selectOption(brand);
        await this.page.locator('select[name="carModelId"]').selectOption(model);
        await this.page.locator('input[name="mileage"]').fill(mileage);
        await this.page.click('.modal-footer > .btn-primary');
    }

    async verifyCarExists(model: any) {
        await expect(this.page.locator(`p.car_name.h2`).filter({ hasText: model })).toBeVisible();
    }

    // async editCar(model: any) {
        
    //     const carCard = this.page.locator('div.car-item:has-text("Ford Mondeo")')
    //     const editButton = carCard.locator('icon icon-edit');
    //     await editButton.click();

    // }
    
      
    
}
