import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

async function multiUserTest() {
let Browser = await chromium.launch({ headless: false });

//Admin

let AdminContext = await Browser.newContext();
let AdminPage = await AdminContext.newPage();
await AdminPage.goto("https://app.vwo.com");
console.log("Admin: on login page ");

//User

let UserContext = await Browser.newContext();
let UserPage = await UserContext.newPage();
await UserPage.goto("https://app.vwo.com");
console.log("User: on login page ");

await AdminContext.close();
await UserContext.close();
await Browser.close();

}

multiUserTest();




