import { test, expect, FrameLocator, Locator } from '@playwright/test'

test('Nested Iframes — The Testing Academy', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    let frame1: FrameLocator = page.frameLocator('iframe#pact1');
    let frame2: FrameLocator = frame1.frameLocator('iframe#pact2');
    let frame3: FrameLocator = frame2.frameLocator('iframe#pact3');

    // To enter the value in the First Level, we use frame1
    await frame1.locator('#inp_val').fill('Testing');

    // To enter the value in the Second Level, we use frame2
    await frame2.locator('#jex').fill('Selenium');

    // To enter the value in the Third Level, we use frame3
    await frame3.locator('#glaf').fill('Playwright');

    // To fetch the value from h3, we directly use page and as we have 2 occurances we used first()
    const headerText = await page.locator('h3').first().innerText();
    console.log(headerText);

    await page.waitForTimeout(2000);
});