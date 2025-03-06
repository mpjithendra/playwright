const { test, expect } = require('@playwright/test');

test('Alert with OK Button', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Enable alert handling OR dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(5000);
});

test('Confirmation dialog', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Enable alert handling OR dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
        // await dialog.dismiss();
    });
    await page.click('//button[@id="confirmBtn"]');
    await expect(await page.locator('//p[@id="demo"]').innerText()).toContain('You pressed OK!');

    await page.waitForTimeout(5000);
});

test.only('Prompt Window', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Enable alert handling OR dialog window handling
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('Jhon Doe');
        // await dialog.dismiss();
    });
    await page.click('//button[@id="promptBtn"]');
    await expect(await page.locator('//p[@id="demo"]').innerText()).toContain('Hello Jhon Doe! How are you today?');

    await page.waitForTimeout(5000);
});