const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({page}) => {
    await page.goto(`http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html`);
    const source = page.locator(`#box6`);
    const target = page.locator(`#box106`);

    // Approach 1
    await source.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();
    await page.waitForTimeout(5000);

    const source1 = page.locator(`#box7`);
    const target1 = page.locator(`#box107`);
    // Approach 2
    await source1.dragTo(target1);
    await page.waitForTimeout(5000);
});