import { test, expect } from '@playwright/test';

test.describe('Rozetka Search Test', () => {

    test('Перевірка пошуку "m2 ssd"', async ({ page, baseURL }) => {
        
        // await page.goto(baseURL);
        
        
        // const searchInput = page.locator('input[name="search"]');
        // await searchInput.fill('m2 ssd');
        // await searchInput.press('Enter');

        
        // const searchHeader = page.locator('h2');
        // await expect(searchHeader).toHaveText(" Результати пошуку «m2 ssd» ");
        if (!baseURL) throw new Error('baseURL is undefined!');

        await page.goto(baseURL);
    
        const searchInput = page.locator('input[name="search"]');
        await searchInput.fill('m2 ssd');
        await searchInput.press('Enter');
    
        await expect(page.locator('h1')).toHaveText(/Результати пошуку «m2 ssd»/);
    });

});
