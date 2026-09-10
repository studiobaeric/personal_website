const { test, expect } = require('@playwright/test');

test.describe('impressum page', () => {
  test('shows the imprint text', async ({ page }) => {
    await page.goto('/pages/impressum.html', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.impressum-text')).toContainText('Eric Sodemann');
    await expect(page.locator('.impressum-text')).toContainText('ericsode03@gmail.com');
  });

  test('back button returns to the page it was opened from', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.click('#impressum-button');
    await page.waitForURL(/\/pages\/impressum\.html$/, { waitUntil: 'commit' });

    await page.click('#impressum-back-button');
    await page.waitForURL(/\/$|\/index\.html$/, { waitUntil: 'commit' });
  });
});
