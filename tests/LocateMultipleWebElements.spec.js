const {test, expect} = require('@playwright/test');

test('Locate multiple Web Elements', async ({page}) => {
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE');
  await expect(page).toHaveURL('https://demoblaze.com');

  // Locate multiple Web Elements
  page.waitForSelector('a');
  const elements = await page.$$('a');
  console.log('Number of elements: ', elements.length);
//   console.log(elements);
  for (const element of elements) {
    console.log(await element.textContent());
  }
  await page.close();
});