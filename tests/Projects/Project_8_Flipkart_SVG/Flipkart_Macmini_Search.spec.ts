// Open the Flipkart website go to this link flipkart.com/search
// Search for the macmini and click on the SVG icon
//Get the all results on the first page and click on the low to high button and give me the cheapest macmini available on the flipkart.

import { test, expect, Locator } from '@playwright/test';

const URL = 'https://www.flipkart.com/search';

test.describe('SVG Element Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate SVG root and assert visible', async ({ page }) => {

        await page.locator('input[name="q"]').fill("macmini");

        const svgElements: Locator = page.locator('svg');
        await svgElements.first().click();

        await page.getByText('Price -- Low to High').click();

        await page.waitForTimeout(5000);

        const cheapestProdName: string | null = await page.locator('//div[contains(@data-id,"CPU")]/div/a[contains(@title,"Apple Mac Mini (MXNF2HN/A)")]').textContent();

        const cheapestProdPrice: string |null = await page.getByText('₹72,990').textContent();

        console.log('Cheapest Mac Mini Available:');

        console.log(`Product: ${cheapestProdName}`);

        console.log(`Price: ${cheapestProdPrice}`);






    });



});