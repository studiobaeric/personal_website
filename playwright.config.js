const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:8080',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {...devices['Desktop Chrome']},
    },
    // Run separately via `npm run test:mobile` (see .github/workflows/test.yml)
    // so mobile and desktop results are reported independently.
    {
      name: 'mobile-chrome',
      use: {...devices['Pixel 5']},
    },
  ],

  webServer: {
    // A plain static server, not the webpack dev server: the site ships as
    // static files (see .github/workflows/deploy.yml, which just rsyncs
    // them), and the dev server's hot-reload client was causing pages to
    // reload mid-test, hanging the suite in CI.
    command: 'npm run test:server',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
  },
});
