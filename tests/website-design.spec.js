const { test, expect } = require('@playwright/test');

test.describe('website design page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pages/website-design-page.html', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.zoomable-image');
  });

  test('clicking a zoomable image opens the modal with that image', async ({ page }) => {
    const firstImage = page.locator('.zoomable-image').first();
    const src = await firstImage.getAttribute('src');

    await firstImage.click();

    const modal = page.locator('#image-modal');
    await expect(modal).toHaveCSS('display', 'flex');
    await expect(page.locator('#modal-image')).toHaveJSProperty('src', new URL(src, page.url()).toString());
  });

  test('closing the modal hides it again', async ({ page }) => {
    await page.locator('.zoomable-image').first().click();
    await expect(page.locator('#image-modal')).toHaveCSS('display', 'flex');

    await page.click('#close-modal');
    await expect(page.locator('#image-modal')).toHaveCSS('display', 'none');
  });

  test('clicking outside the image also closes the modal', async ({ page }) => {
    await page.locator('.zoomable-image').first().click();
    await expect(page.locator('#image-modal')).toHaveCSS('display', 'flex');

    await page.click('#image-modal', { position: { x: 5, y: 5 } });
    await expect(page.locator('#image-modal')).toHaveCSS('display', 'none');
  });

  test('impressum button navigates to the impressum page', async ({ page }) => {
    await page.click('#impressum-button');
    await page.waitForURL(/\/pages\/impressum\.html$/, { waitUntil: 'commit' });
  });
});
