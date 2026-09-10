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
    // The current layout isn't mobile-friendly yet (see issue #1), so this
    // project is run separately via `npm run test:mobile` rather than as
    // part of the default `npm test` / CI gate.
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
