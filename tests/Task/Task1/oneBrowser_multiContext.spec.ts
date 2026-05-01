//oneBrowser_multiContext
//import { test, expect } from '@playwright/test';
//import { chromium } from 'playwright';
import {chromium, Browser, BrowserContext, Page, test,expect} from "@playwright/test";


test('one browser multiple contexts', async () => {

    // Launch browser
    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser launched");
    // Context 1 - Admin
    let adminContext: BrowserContext = await browser.newContext();
    console.log("Admin Context created", adminContext);
    let adminPage: Page = await adminContext.newPage();
    console.log("Admin Page opened");
    await adminPage.goto("https://app.vwo.com/#login");
    console.log("Admin URL:", adminPage.url());
    // Context 2 - Guest
    let guestContext: BrowserContext = await browser.newContext();
    console.log("Guest Context created", guestContext);
    let guestPage: Page = await guestContext.newPage();
    console.log("Guest Page opened");
    await guestPage.goto("https://app.vwo.com/#login");
    console.log("Guest URL:", guestPage.url());
    

});