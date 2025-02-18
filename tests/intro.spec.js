import { test, expect } from '@playwright/test';

test('Search for ДК Енергетик on Vinyla', async ({ page }) => {
    await page.goto('https://vinyla.com/');
    const searchInput = page.getByRole('textbox', { name: 'Пошук' });
    await searchInput.fill('ДК Енергетик');
    await searchInput.press('Enter');
    
   
});