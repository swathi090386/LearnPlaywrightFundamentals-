import { test, expect } from '@playwright/test'

test('Hover Add-ons and click Wi-Fi', async ({ page }) => {

    // Navigate to the Hover-only menu page
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

    // Hover on the 'Add-ons' menu item
    await page.getByTestId('nav-add-ons').hover();

    // Use dispatchEvent to trigger the click directly, bypassing visibility checks
    await page.getByTestId('test-id-Wifi').click();

    // Validate the content in the output section
    const output = await page.locator('#output').innerText();
    expect(output).toContain('Wi-Fi');
});