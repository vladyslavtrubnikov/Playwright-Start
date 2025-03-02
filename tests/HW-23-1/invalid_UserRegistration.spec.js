
import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../POM-HW-23-1/RegistrationPage';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const EMAIL_PREFIX = 'aqa';
const TEST_DOMAIN = 'test.com';

test.describe('Invalid User Registration', () => {
    let registrationPage;

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.navigate(BASE_URL);
        await registrationPage.openSignUpModal();
    });

    test('Перевірка появи валідації на порожні поля', async () => {
        await registrationPage.focusNameInput();
        await registrationPage.focusLastNameInput();
        await registrationPage.focusEmailInput();
        await registrationPage.focusPassInput();
        await expect(registrationPage.page.locator('text="Name required"')).toBeVisible();
        await expect(registrationPage.page.locator('text="Last name required"')).toBeVisible();
        await expect(registrationPage.page.locator('text="Email required"')).toBeVisible();
    });

    test('Перевірка на невалідний email', async () => {
        await registrationPage.fillRegistrationForm('John', 'Doe', 'invalid-email', 'Test1234', 'Test1234');
        await expect(registrationPage.page.locator('text="Email is incorrect"')).toBeVisible();
    });

    test('Перевірка на внесення занадто короткого Імені', async () => {
        await registrationPage.fillRegistrationForm('J', 'Doe', `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`, 'Test1234', 'Test1234');
        await expect(registrationPage.page.locator('text="Name has to be from 2 to 20 characters long"')).toBeVisible();
    });

    test('Перевірка на не співпадіння паролів', async () => {
        await registrationPage.fillRegistrationForm('John', 'Doe', `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`, 'Test1234', 'WrongPassword');
        await registrationPage.focusNameInput()
        await expect(registrationPage.page.locator('text="Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"')).toBeVisible();
    });
});
