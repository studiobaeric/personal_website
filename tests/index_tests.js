const { test, expect } = require('@playwright/test');

test('page loads and button works', async ({ page }) => {
  await page.goto('file://' + process.cwd() + '/index.html');

  await expect(page).toHaveTitle(/Eric Sodemann/);

  await page.click('#myButton');
  await expect(page.locator('#output')).toHaveText('Clicked!');
});
