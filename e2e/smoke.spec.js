const { test, expect } = require('@playwright/test');

test('should load the main page and navigate', async ({ page }) => {
  await page.goto('/');

  // Check title
  await expect(page).toHaveTitle(/PID Graphs/);

  // Example: Navigation to Recharts
  const rechartsLink = page.locator('text=Recharts').first();
  if (await rechartsLink.isVisible()) {
    await rechartsLink.click();
    await expect(page).toHaveURL(/.*recharts/);
  }
});
