const { test, expect } = require('@playwright/test');

test('Frames', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    // Total frames in a page
    const allFrames = await page.frames(); // Returns an array of all frames in a page
    console.log("Total Frames: ", allFrames.length);

    // Approach 1: Using name or url
    // const frame1 = await page.frame({name: 'frame1'});
    // const frame1 = await page.frame('frame1');
    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill('//input[@name="mytext1"]', "My Name is Jhon Doe");
    await page.waitForTimeout(5000);

    // Approach 2: Using frame locator\
    const inputBox = await page.frameLocator(`//frame[@src="frame_1.html"]`).locator(`//input[@name="mytext1"]`);
    await inputBox.fill("My Name is Harry Potter");
    await page.waitForTimeout(5000);
});