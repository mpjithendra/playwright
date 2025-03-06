const {test, expect} = require('@playwright/test');

test('Home page', async ({page}) => {
  await page.goto('https://demoblaze.com/');
  const title = await page.title();
  await expect(title).toBe('STORE');
  await expect(page).toHaveTitle('STORE');
  await expect(title).toContain('STORE');
  await expect(page.url()).toBe('https://demoblaze.com/');
  await expect(page.url()).toContain('demoblaze');
  await expect(page).toHaveURL('https://demoblaze.com');
  await page.close();
});