//one browser same context multiple pages


import {chromium, Browser, BrowserContext, Page, test,expect} from "@playwright/test";

test('one browser same context multiple pages',async () =>{
    // Launch browser
    let browser: Browser = await chromium.launch({ headless: false });

    console.log("Browser launched");

    // Create context
    let context: BrowserContext = await browser.newContext();
    console.log("Context created", context);

    // Create multiple pages
    let page1: Page = await context.newPage();
    let page2: Page = await context.newPage();
    let page3: Page = await context.newPage();

    // Navigate to different URLs
    await page1.goto("https://app.vwo.com/#/login");
    await expect(page1).toHaveTitle("Login - VWO");

    await page2.goto("https://app.vwo.com/#/login");
    await expect(page2).toHaveTitle("Login - VWO");

    await page3.goto("https://app.vwo.com/#/login");
    await expect(page3).toHaveTitle("Login - VWO");

    // Cleanup
    await context.close();
    await browser.close();
});