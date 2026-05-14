import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Nested Iframes — The Testing Academy', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/nested-iframes');

    let frame1: FrameLocator = page.frameLocator('iframe#pact1');
    let frame2: FrameLocator = frame1.frameLocator('iframe#pact2');
    let frame3: FrameLocator = frame2.frameLocator('iframe#pact3');

    await frame1.locator('#inp_val').fill('Testing');
    await frame2.locator('#jex').fill('Nested Iframes');
    await frame3.locator('#glaf').fill('Playwright');


    const headerText = await page.locator('h3').first().innerText();
    console.log(headerText);
    await page.waitForTimeout(3000);




});