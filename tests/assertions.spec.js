const {test, expect} = require('@playwright/test');

test('Assertions', async ({page}) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');

//   Hard Assertions
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

//   Soft Assertions
  await expect.soft(page).toHaveURL('https://demo.nopcommerce.ffcom/register?returnUrl=%2F');
  await expect.soft(page).toHaveTitle('nopCommerce demo store. Register');

  let logo = await page.getByAltText('nopCommerce demo store');
  await expect(logo).toBeVisible();
});