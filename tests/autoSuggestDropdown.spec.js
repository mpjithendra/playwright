const {test, expect} = require('@playwright/test');

test('DropDowns Bootstrap', async ({page}) => {
    await page.goto('https://www.redbus.com/');
    const dropDown = await page.locator('.source input');
    await dropDown.type("Bangalore");
    await page.waitForTimeout(5000);

    let options = await page.$$('.autoFill li');

    for(let option of options){
        await expect(option).toBeVisible();
        let opt = await option.textContent();
        if(opt.includes('Marathahalli, Bangalore, Karnataka, India')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(5000);
});