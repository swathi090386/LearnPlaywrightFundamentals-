//Katalon_Cura_Login_Test
import { test, expect } from '@playwright/test';

test('Katalon Cura Login Test', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    // Verify the page title    await expect(page).toHaveTitle('CURA Healthcare Service');
    console.log("Page title verified ✅");
    // Fill in the username and password fields
    await page.fill('#txt-username', 'John Doe');
    await page.fill('#txt-password', 'ThisIsNotAPassword');
    console.log("Username and password filled ✅");
    // Click the login button
    await page.click('#btn-login');
    console.log("Login button clicked ✅");
    // Verify successful login by checking for the presence of the "Make Appointment" button
    await expect(page.locator('#btn-make-appointment')).toBeVisible();
    console.log("Login successful, 'Make Appointment' button is visible ✅");
});

