const { test, expect } = require('@playwright/test');

test('Right Click', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const doubleClick = await page.locator(`//button[normalize-space()='Copy Text']`);
    await doubleClick.dblclick();
    const field2 = page.locator('#field2')
    expect(await field2.inputValue()).toBe('Hello World!');
    await page.waitForTimeout(5000);
});