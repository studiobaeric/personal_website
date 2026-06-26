const { test, expect } = require('@playwright/test');

test('basic page test', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page).toHaveTitle(/Eric Sodemann/);
});

test('', async ({ page }) => {
  await page.goto('http://localhost:8080');

  await expect(page)
});

