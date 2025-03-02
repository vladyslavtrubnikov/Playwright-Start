import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../POM-HW-23-1/RegistrationPage';

const BASE_URL = 'https://guest:welcome2qauto@qauto.forstudy.space';
const EMAIL_PREFIX = 'aqa';
const TEST_DOMAIN = 'test.com';

test.describe('User Registration', () => {
    let registrationPage;

    test.beforeEach(async ({ page }) => {
        registrationPage = new RegistrationPage(page);
        await registrationPage.navigate(BASE_URL);
        await registrationPage.openSignUpModal();
    });

    test('Successful user registration', async ({ page }) => {
        const email = `${EMAIL_PREFIX}-${Date.now()}@${TEST_DOMAIN}`;
        await registrationPage.fillRegistrationForm('John', 'Doe', email, 'Test1234', 'Test1234');
        await registrationPage.submitRegistration();

        await expect(page).toHaveURL(/\/panel\/garage/);
    });
});
