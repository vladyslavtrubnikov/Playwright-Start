import { test, expect } from '@playwright/test';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const STORAGE_STATE_PATH = 'storageState.json';

test('Login and save storage state', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Відкриваємо форму логіну
    await page.click('button:has-text("Sign in")');

    // Заповнюємо поля логіну
    await page.fill('input[name="email"]', 'strongholdseren@gmail.com');
    await page.fill('input[name="password"]', 'Tvvctkg2');

    // Натискаємо кнопку "Login"
    await page.click('.modal-footer > .btn-primary');

    // Перевіряємо, що ми успішно увійшли
    await expect(page).toHaveURL(/\/panel\/garage/);

    // Зберігаємо storage state
    await page.context().storageState({ path: STORAGE_STATE_PATH });
});
