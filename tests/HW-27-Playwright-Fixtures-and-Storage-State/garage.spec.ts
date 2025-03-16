import { test, expect } from '@playwright/test';
import { GaragePage } from './userGaragePage';

test.use({ storageState: 'storageState.json' });

test('Add a new car to the garage', async ({ page }) => {
    const garagePage = new GaragePage(page);
    
    await garagePage.goto();
    await garagePage.addCar('Ford', 'Mondeo', '15000');
    // await garagePage.verifyCarExists('Mondeo');
    // await garagePage.editCar('Mondeo');
    await garagePage.goto();
});
