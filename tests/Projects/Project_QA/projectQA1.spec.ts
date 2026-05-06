import { test, expect } from '@playwright/test';

test.describe('QA Profile Tests', () => {
  test('Complete the QA profile with full details and capture screenshot', async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/playwright/tables/practice");

        await page.getByRole('textbox', { name: 'First name' }).fill("swathi");
        await page.getByTestId('last-name').fill('Dev');
        await page.getByRole('radio', { name: 'Female' }).check();
        await page.waitForTimeout(3000);
        await page.locator('#years-experience').selectOption({ label: '7' });
        await page.locator('#profile-date').fill('2026-06-05');
        await page.getByRole('radio', { name: 'Automation Tester' }).check();
        await page.getByRole('checkbox', { name: 'UFT' }).check();
        await page.getByRole('checkbox', { name: 'Selenium Webdriver' }).check();
        await page.getByRole('checkbox', { name: 'Asia' }).check();
        await page.getByRole('checkbox', { name: 'South America' }).check();
        await page.getByRole('checkbox', { name: 'North America' }).check();
        await page.getByRole('tab', { name: 'Switch Commands' }).click();
         await page.getByTestId('profile-submit').click();
    });
});