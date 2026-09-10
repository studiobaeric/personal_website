const { test, expect } = require('@playwright/test');

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('has the expected title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eric Sodemann/);
  });

  test('renders the timeline and post-it button', async ({ page }) => {
    await expect(page.locator('#website-design-button')).toBeVisible();
    await expect(page.locator('#timeline-container .item')).toHaveCount(8);
    await expect(page.locator('#timeline-container .label')).toHaveCount(8);
  });

  test('post-it button navigates to the website design page', async ({ page }) => {
    await page.click('#website-design-button');
    await page.waitForURL(/\/pages\/website-design-page\.html$/, { waitUntil: 'commit' });
  });

  test('impressum button navigates to the impressum page', async ({ page }) => {
    await page.click('#impressum-button');
    await page.waitForURL(/\/pages\/impressum\.html$/, { waitUntil: 'commit' });
    await expect(page.locator('.impressum-text')).toContainText('Eric Sodemann');
  });
});
