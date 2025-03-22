import { test, expect } from '@playwright/test';

const baseURL = 'https://guest:welcome2qauto@qauto.forstudy.space';


test('Мокання профілю: заміна Franko Man на Soul Goodman', async ({ page }) => {
  
  await page.goto(baseURL, {
    username: 'guest',
    password: 'welcome2qauto',
  });

 
  await page.locator('app-panel-layout').getByRole('link', { name: 'Profile' }).click();

  
  await expect(page.getByText('Franko Man')).toHaveText('Franko Man');

  
  await page.route('**/api/users/profile', async (route) => {
    const mockedResponse = {
      status: 'ok',
      data: {
        userId: 198934,
        name: 'Soul',
        lastName: 'Goodman',
        photoFilename: 'default-user.png',
        country: 'Lviv',
      },
    };
    await route.fulfill({ json: mockedResponse });
  });

  
  await page.reload();

  
  await expect(page.getByText('Soul Goodman')).toHaveText('Soul Goodman');
  await expect(page.getByText('Lviv')).toHaveText('Lviv');
  
});
