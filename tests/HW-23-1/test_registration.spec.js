import { test, expect } from '@playwright/test';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const EMAIL_PREFIX = 'aqa'; 
const TEST_DOMAIN = 'test.com';

test.describe('User Registration', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
        await page.locator('button:has-text("Sign up")').click(); 
    });

    
    test('Successful user registration', async ({ page }) => {
        await page.fill('input[name="name"]', 'John');
        await page.fill('input[name="lastName"]', 'Doe');
        await page.fill('input[name="email"]', `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`);
        await page.fill('input[name="password"]', 'Test1234');
        await page.fill('input[name="repeatPassword"]', 'Test1234');
        await page.click('.modal-footer > .btn-primary');

        await expect(page).toHaveURL(/\/panel\/garage/); 
    });


});
