import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

async function main() {

    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);

    let context: BrowserContext = await browser.newContext();
    console.log("Browser Context Created", context);

    let page: Page = await context.newPage();
    console.log("Page opened");

    await page.goto("https://app.vwo.com");
    console.log("Title:", await page.title());

    await page.close();
    await browser.close();
    await context.close();

}