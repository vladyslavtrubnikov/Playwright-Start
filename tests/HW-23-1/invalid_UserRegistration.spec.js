import { test, expect } from '@playwright/test';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const EMAIL_PREFIX = 'aqa'; // Префікс для тестових юзерів
const TEST_DOMAIN = 'test.com';

test.describe('User Registration', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
        await page.locator('button:has-text("Sign up")').click(); // Відкриваємо модальне вікно реєстрації
    });


    
    test('Перевірка появи валідації на порожні поля', async ({ page }) => {
        const nameInput = page.locator('input[name="name"]');
        await nameInput.focus();
        const lastNameInput = page.locator('input[name="lastName"]');
        await lastNameInput.focus();
        const mailInput = page.locator('input[name="email"]');
        await mailInput.focus();
        const passInput = page.locator('input[name="password"]');
        await passInput.focus();
        const repeatPassInput = page.locator('input[name="repeatPassword"]');
        await repeatPassInput.focus();
        const nameReturnInput = page.locator('input[name="name"]');
        await nameReturnInput.focus();

        await expect(page.locator('text="Name required"')).toBeVisible();
        await expect(page.locator('text="Last name required"')).toBeVisible();
        await expect(page.locator('text="Email required"')).toBeVisible();
        await expect(page.locator('text="Password required"')).toBeVisible();
        await expect(page.locator('text="Re-enter password required"')).toBeVisible();
    });

    
    test('Перевірка на невалідний email', async ({ page }) => {
        await page.fill('input[name="name"]', 'John');
        await page.fill('input[name="lastName"]', 'Doe');
        await page.fill('input[name="email"]', 'invalid-email');
        await page.fill('input[name="password"]', 'Test1234');
        await page.fill('input[name="repeatPassword"]', 'Test1234');
        await expect(page.locator('text="Email is incorrect"')).toBeVisible();
    });

    
    test('Перевірка на внесення занадто короткого Імені', async ({ page }) => {
        await page.fill('input[name="name"]', 'J'); // Тільки 1 символ
        await page.fill('input[name="lastName"]', 'Doe');
        await page.fill('input[name="email"]', `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`);
        await page.fill('input[name="password"]', 'Test1234');
        await page.fill('input[name="repeatPassword"]', 'Test1234');
        // await page.click('.modal-footer > .btn-primary');

        await expect(page.locator('text="Name has to be from 2 to 20 characters long"')).toBeVisible();
    });

    
    test('Перевірка на не співпадіння паролів', async ({ page }) => {
        await page.fill('input[name="name"]', 'John');
        await page.fill('input[name="lastName"]', 'Doe');
        await page.fill('input[name="email"]', `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`);
        await page.fill('input[name="password"]', 'TestPas@@word22');
        await page.fill('input[name="repeatPassword"]', 'TestPas@@word22Wrong');
        const nameInput = page.locator('input[name="name"]');
        await nameInput.focus();
        await expect(page.locator('text="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"')).toBeVisible();
    });

    

});
