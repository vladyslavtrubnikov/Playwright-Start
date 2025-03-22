import { test, expect } from '@playwright/test';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const STORAGE_STATE_PATH = 'storageState.json';

test('Login and save storage state', async ({ page }) => {
    await page.goto(BASE_URL);
    
    
    await page.click('button:has-text("Sign in")');
    await page.fill('input[name="email"]', 'strongholdseren@gmail.com');
    await page.fill('input[name="password"]', 'Tvvctkg2');
    await page.click('.modal-footer > .btn-primary');
    await expect(page).toHaveURL(/\/panel\/garage/);
    await page.context().storageState({ path: STORAGE_STATE_PATH });
});
