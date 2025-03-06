const {test, expect} = require('@playwright/test');

test('Radio', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const radio = await page.locator('//input[@id="male"]');
    await expect(radio).toBeVisible();
    await expect(radio).not.toBeChecked();
    await radio.check();
    await page.waitForTimeout(2000);
    await expect(radio).toBeChecked();
});