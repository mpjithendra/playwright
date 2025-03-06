const {test, expect} = require('@playwright/test');

test('DropDowns', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const dropDown = await page.locator('//select[@id="country"]');
    await expect(dropDown).toBeVisible();

    // Multiple ways to select an option from the dropdown
    await dropDown.scrollIntoViewIfNeeded(); // Scroll to the dropdown
    // await dropDown.selectOption({label: 'India'}); // Select by Visible Text
    // await dropDown.selectOption('India'); // Select by Visible Text
    // await dropDown.selectOption({value: 'uk'}) // Select by Value
    // await dropDown.selectOption({index: 0}) // Select by Index
    await page.selectOption('//select[@id="country"]', 'India');
    await page.waitForTimeout(2000);

    // Assert the selected option
    // Check number of options : Approach 1
    let optionsCount = await page.locator('#country option')
    await expect(optionsCount).toHaveCount(10);

    // Approach 2
    let options = await page.$$('#country option');
    await expect(options).toHaveLength(10);
    await expect(options.length).toBe(10);

    // Check the presence of an option
    // Approach 1
    let content = await page.locator('//select[@id="country"]').textContent();
    await expect(content).toContain('India');
    await expect(content.includes('India')).toBeTruthy();
});