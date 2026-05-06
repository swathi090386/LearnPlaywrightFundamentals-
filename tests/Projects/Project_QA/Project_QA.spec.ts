// https://app.thetestingacademy.com/playwright/tables/practice
// Complete the QA profile with whatever elements you know and add a grid hub profile as well as a screenshot also.

import { test, expect } from '@playwright/test';

test.describe('QA Profile Tests', () => {
  test('Complete the QA profile with full details and capture screenshot', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    await page.getByRole('textbox', { name: 'First name' }).fill('Swathi');
    await page.getByTestId('last-name').fill('Dev');
    await page.locator('[data-testid="gender-female"]').check();
    await page.locator('[data-testid="years-experience"]').selectOption({ label: '7' });
    await page.locator('[data-testid="profile-date"]').fill('2026-06-05');
    await page.locator('[data-testid="profession-automation"]').check();

    await page.locator('[data-testid="tool-uft"]').check();
    await page.locator('[data-testid="tool-protractor"]').check();
    await page.locator('[data-testid="tool-selenium"]').check();

    await page.locator('[data-testid="continent-asia"]').check();
    await page.locator('[data-testid="continent-europe"]').check();
    await page.locator('[data-testid="continent-north-america"]').check();
    await page.locator('[data-testid="continent-australia"]').check();

    await page.getByRole('tab', { name: 'Switch Commands' }).click();
    await page.getByTestId('profile-submit').click();

    const jsonOutput = page.locator('#submission-output');
    await expect(jsonOutput).toBeVisible();
    await expect(jsonOutput).toContainText('Swathi');
    await expect(jsonOutput).toContainText('Dev');
    await expect(jsonOutput).toContainText('Female');
    await expect(jsonOutput).toContainText('Automation Tester');
    await expect(jsonOutput).toContainText('UFT');
    await expect(jsonOutput).toContainText('Selenium Webdriver');
    await expect(jsonOutput).toContainText('Asia');
    await expect(jsonOutput).toContainText('Europe');

    await page.screenshot({ path: 'test-results/QA_Profile_Submission.png', fullPage: true });
  });

  test('Add a Grid Hub profile and save screenshot', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    await page.getByRole('textbox', { name: 'First name' }).fill('Grid');
    await page.getByTestId('last-name').fill('Hub');
    await page.locator('[data-testid="gender-male"]').check();
    await page.locator('[data-testid="years-experience"]').selectOption({ label: '5' });
    await page.locator('[data-testid="profile-date"]').fill('2026-07-01');
    await page.locator('[data-testid="profession-manual"]').check();

    await page.locator('[data-testid="tool-protractor"]').check();
    await page.locator('[data-testid="tool-selenium"]').check();

    await page.locator('[data-testid="continent-south-america"]').check();
    await page.locator('[data-testid="continent-north-america"]').check();

    await page.getByRole('tab', { name: 'Switch Commands' }).click();
    await page.getByTestId('profile-submit').click();

    const gridOutput = page.locator('#submission-output');
    await expect(gridOutput).toBeVisible();
    await expect(gridOutput).toContainText('Grid');
    await expect(gridOutput).toContainText('Hub');
    await expect(gridOutput).toContainText('Male');
    await expect(gridOutput).toContainText('Manual Tester');

    await page.screenshot({ path: 'test-results/Grid_Hub_Profile.png', fullPage: true });
  });

  test('Create customer report profile and attach video + screenshot @customerReport', async ({ page }, testInfo) => {
    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    await page.getByRole('textbox', { name: 'First name' }).fill('Customer');
    await page.getByTestId('last-name').fill('Report');
    await page.locator('[data-testid="gender-female"]').check();
    await page.locator('[data-testid="years-experience"]').selectOption({ label: '8' });
    await page.locator('[data-testid="profile-date"]').fill('2026-08-10');
    await page.locator('[data-testid="profession-automation"]').check();

    await page.locator('[data-testid="tool-uft"]').check();
    await page.locator('[data-testid="tool-selenium"]').check();
    await page.locator('[data-testid="tool-protractor"]').check();

    await page.locator('[data-testid="continent-asia"]').check();
    await page.locator('[data-testid="continent-africa"]').check();
    await page.locator('[data-testid="continent-north-america"]').check();

    await page.getByRole('tab', { name: 'Switch Commands' }).click();
    await page.getByTestId('profile-submit').click();

    const customerOutput = page.locator('#submission-output');
    await expect(customerOutput).toBeVisible();
    await expect(customerOutput).toContainText('Customer');
    await expect(customerOutput).toContainText('Report');
    await expect(customerOutput).toContainText('Female');
    await expect(customerOutput).toContainText('Automation Tester');
    await expect(customerOutput).toContainText('UFT');
    await expect(customerOutput).toContainText('Africa');

    const screenshotPath = 'test-results/Customer_Report_Profile.png';
    await page.screenshot({ path: screenshotPath, fullPage: true });
    await testInfo.attach('customer-report-screenshot', {
      path: screenshotPath,
      contentType: 'image/png',
    });

    const video = page.video();
    if (video) {
      const videoPath = 'test-results/Customer_Report_Profile.webm';
      await video.saveAs(videoPath);
      await testInfo.attach('customer-report-video', {
        path: videoPath,
        contentType: 'video/webm',
      });
    }

    const customerReportData = {
      reportType: 'Customer Report',
      profileName: 'Customer Report Profile',
      firstName: 'Customer',
      lastName: 'Report',
      gender: 'Female',
      profession: 'Automation Tester',
      tools: ['UFT', 'Selenium Webdriver', 'Protractor'],
      continents: ['Asia', 'Africa', 'North America'],
      reportSource: 'TTA Custom Reporter',
    };

    await testInfo.attach('customer-report-tta', {
      body: JSON.stringify(customerReportData, null, 2),
      contentType: 'application/json',
    });
  });
});


