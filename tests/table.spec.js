const { test, expect } = require('@playwright/test');

test('Table', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');    

    const table = await page.locator('#productTable');
    // 1. Capture total columns
    const columns = await table.locator('thead tr th');
    await console.log("Total columns: ", await columns.count());

    // 2. Capture total rows
    const rows = await table.locator('tbody tr');
    await console.log("Total rows: ", await rows.count());

    // 3. Select the checkbox of the row where the product is "Smartwatch"
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    });
    await matchedRow.locator('input').check();
    await expect(await matchedRow.locator('input').isChecked()).toBeTruthy();

    // 4. Select multiple products
    await selectProducr(rows, page, 'Wireless Earbuds');
    await selectProducr(rows, page, 'Laptop');

    // 5. Print all the product details
    for(let i=0; await i<await rows.count(); i++){
        const row = rows.nth(i);
        const tds = row.locator('td');
        for(let j=0; j<await tds.count()-1; j++){
            await console.log(await tds.nth(j).textContent());
        }
    }

    // 6. Print data from all the pages in the table
    const pages = await page.locator('.pagination a');
    console.log("Total pages: ", await pages.count());
    for(let i=0; i<await pages.count(); i++){
        if(i>0){
            await pages.nth(i).click();
            await page.waitForTimeout(1500);
        }
        const rows = await table.locator('tbody tr');
        for(let i=0; i<await rows.count(); i++){
            const row = rows.nth(i);
            const tds = row.locator('td');
            for(let j=0; j<await tds.count()-1; j++){
                await console.log(await tds.nth(j).textContent());
            }
        }
    }    
})

async function selectProducr(rows, page, ProductName){
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: ProductName
    });
    await matchedRow.locator('input').check();
    await expect(await matchedRow.locator('input').isChecked()).toBeTruthy();
}