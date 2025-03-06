const {test, expect} = require('@playwright/test');

test('Input Box', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const name = await page.locator('//input[@id="name"]');
    await expect(name).toBeVisible();
    await expect(name).toBeEditable();
    await expect(name).toBeEmpty();
    await name.fill('John Doe');
    await page.waitForTimeout(2000);
    await name.type('John BGM');
    await page.waitForTimeout(2000);
    await name.fill('Danny');
    await page.waitForTimeout(2000);
});