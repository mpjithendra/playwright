const { test, expect } = require('@playwright/test');

test('Keyboard Action', async ({page}) => {
    await page.goto(`https://gotranscript.com/text-compare`);
    await page.fill('//textarea[@placeholder="Paste one version of the text here."]', "Welcome to Gotranscript. ");
    await page.type('//textarea[@placeholder="Paste one version of the text here."]', "Welcome to India");

    // Ctrl+A - Select the text
    await page.keyboard.press('Control+a');

    // Ctrl+C - Copy the text
    await page.keyboard.press('Control+c');

    // Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl+V - Paste the text
    await page.keyboard.press('Control+v'); 
    await expect(await page.inputValue('//textarea[@placeholder="Paste another version of the text here."]'))
        .toBe("Welcome to Gotranscript. Welcome to India");

    await page.waitForTimeout(5000);
});