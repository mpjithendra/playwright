const {test, expect} = require('@playwright/test');

test('checkbox', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
    // const checkbox = await page.locator('//div[@class="form-group"][4]//input[@id="monday"]');
    // await expect(checkbox).not.toBeChecked();
    // await expect(checkbox.isChecked()).resolves.toBeFalsy();
    // await checkbox.check();
    // await expect(checkbox).toBeChecked();
    // await expect(checkbox.isChecked()).resolves.toBeTruthy();
    // await page.waitForTimeout(2000);

    const checkbox = await page.$$('//div[@class="form-group"][4]//input[@id="monday"]');

    for(let ele of checkbox){
        if(await ele.getAttribute('value') === 'monday'){
            await console.log("aaaaaa" + ele);
            // await expect(await ele).not.toBeChecked();
            await ele.check();
            await expect(ele.toBeChecked());
            await page.waitForTimeout(5000);
        }
    }
});