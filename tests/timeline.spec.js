const { test, expect } = require('@playwright/test');

const labels = [
  { id: 'label_abitur', firstLine: 'Abitur 2022' },
  { id: 'label_tudarmstadt', firstLine: 'TU-Darmstadt 2022' },
  { id: 'label_mentoring', firstLine: 'Mentoring 2023 (& 2025)' },
  { id: 'label_seriousgames', firstLine: 'Serious Games 2024' },
  { id: 'label_wwdd', firstLine: 'Wrong-Way-Driving Detection 2024' },
  { id: 'label_micromobility', firstLine: 'Active- & Micromobility 2025' },
  { id: 'label_website', firstLine: 'Website-Entwicklung 2026' },
  { id: 'label_bachelor', firstLine: 'vsl. Bachelor Informatik 2027' },
];

test.describe('timeline entries', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#timeline-container .label');
  });

  for (const { id, firstLine } of labels) {
    test(`clicking ${id} updates the info card`, async ({ page }) => {
      await page.click(`#${id}`);
      await expect(page.locator('#infoCard .line').first()).toHaveText(firstLine);
    });
  }

  // Regression test for #4: the micromobility image used to point at a
  // non-existent ./assets/micromobility.png and render as a broken image.
  test('clicking the micromobility entry shows its map image', async ({ page }) => {
    await page.click('#label_micromobility');

    const img = page.locator('#image-container img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', './img/micromobility.png');

    const src = await img.getAttribute('src');
    const response = await page.request.get(new URL(src, page.url()).toString());
    expect(response.status()).toBe(200);
  });

  test('clicking the website entry shows its prototype image', async ({ page }) => {
    await page.click('#label_website');

    const img = page.locator('#image-container img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', './img/website.webp');
  });

  test('switching from an image entry to a text-only entry clears the image', async ({ page }) => {
    await page.click('#label_website');
    await expect(page.locator('#image-container img')).toBeVisible();

    await page.click('#label_abitur');
    await expect(page.locator('#image-container img')).toHaveCount(0);
  });
});
