const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Nested Frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    // locate frame 3
    const frame3 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.locator('//input[@name="mytext3"]').fill("My Name is Jhon Doe 3");
    await expect(await frame3.locator('//input[@name="mytext3"]').inputValue()).toBe("My Name is Jhon Doe 3");

    // Handle nested frames
    const childFrames = await frame3.childFrames();
    await childFrames[0].locator('//input[@aria-label="Other response"]').fill("My Name is Harry Potter 3");
    await expect(await childFrames[0].locator('//input[@aria-label="Other response"]').inputValue()).toBe("My Name is Harry Potter 3");

    await page.waitForTimeout(5000);
});