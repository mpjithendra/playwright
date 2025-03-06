const { test, expect } = require('@playwright/test');

test('Right Click', async ({page}) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const rightClick = await page.locator(`//span[normalize-space()='right click me']`);
    await rightClick.click({button: 'right'});
    await page.waitForTimeout(5000);
});