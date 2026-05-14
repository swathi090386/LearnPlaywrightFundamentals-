import { test, expect, FrameLocator } from '@playwright/test'

test('Single iframe test', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/frames/');

    let vehicleFrame: FrameLocator = page.frameLocator('#frame-one');
    await vehicleFrame.locator('#RESULT_TextField-1').fill("BMW GT");
    await vehicleFrame.locator('#RESULT_TextField-2').fill("Swathi");
    await vehicleFrame.locator('#RESULT_TextField-3').fill("0001");

    await vehicleFrame.locator('#RESULT_RadioButton-1').selectOption("Sedan");

    await vehicleFrame.locator('#RESULT_TextField-4').fill("2020");

    await vehicleFrame.locator('#RESULT_TextArea-1').fill("Luxury sports car");

    await vehicleFrame.getByText("Submit registration").click();

    let output =await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);


    await page.waitForTimeout(3000);

});