const {test, expect} = require('@playwright/test');

test('Locators', async ({page}) => {
  await page.goto('https://demoblaze.com/');    // Go to the URL
  const title = await page.title();            // Get the title of the page and store it in a variable
  await expect(title).toBe('STORE');            // Check if the title is 'STORE'            
  await expect(page).toHaveTitle('STORE');      // Check if the title is 'STORE'
  await expect(page).toHaveURL('https://demoblaze.com/');  // Check if the URL is 'https://demoblaze.com/'
  await expect(page.url()).toBe('https://demoblaze.com/');  // Check if the URL is 'https://demoblaze.com/'

//   click on login button
// prperty of locator
await page.locator('id=login2').click();
// await page.click('id=login2');
// css selector
// await page.locator('#loginusername').fill();
await page.fill('#loginusername', 'pavanol')
await page.type('#loginpassword', 'test@123')

// Click on the Log in button
await page.click('//button[normalize-space()="Log in"]')

// Verify Log out link visibility
await expect(page.locator('//a[normalize-space()="Log out"]')).toBeVisible();

await page.close();
});