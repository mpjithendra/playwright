const { test, expect } = require('@playwright/test');

test('Upload Singlr File', async ({page}) => {
    await page.goto(``)
    await page.setInputFiles('input[type="file"]', 'file1.txt');
    await page.waitForTimeout(5000);
});

test('Upload Multiple Files', async ({page}) => {
    await page.goto(``)
    await page.setInputFiles('input[type="file"]', ['file1.txt', 'file2.txt']);
    await page.waitForTimeout(5000);
});

test('Remove the uploaded file', async ({page}) => {
    await page.goto(``)
    await page.setInputFiles([]);
    await page.waitForTimeout(5000);
});