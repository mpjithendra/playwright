const {test, expect} = require('@playwright/test');

test('DropDowns Bootstrap', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    const dropDown = await page.locator('.multiselect.btn');
    await expect(dropDown).toBeVisible();
    await dropDown.click();
    let ddOptipopn = await page.locator('.btn-group ul>li input');
    // await expect(ddOptipopn).toBeVisible();
    await expect(ddOptipopn).toHaveCount(11);
    let dd = await page.$$('.btn-group ul>li label');
    // await expect(dd.length).toBe(11);

    for(let option of dd){
        let opt = await option.textContent();
        if(opt.includes('HTML') || opt.includes('CSS') || opt.includes('Java') || opt.includes('C#')){
            await option.click();
        }
    }

    await page.waitForTimeout(5000);
});