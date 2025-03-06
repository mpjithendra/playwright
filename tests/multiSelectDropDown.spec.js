const {test, expect} = require('@playwright/test');

test('DropDowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropDown = await page.locator('//select[@id="colors"]');
    await expect(dropDown).toBeVisible();
    await dropDown.selectOption(['Red', 'Green', 'Blue']);
    await page.waitForTimeout(5000);
});