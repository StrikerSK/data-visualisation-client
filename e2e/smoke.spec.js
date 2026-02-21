const { test, expect } = require('@playwright/test');

test('should load the main page and navigate', async ({ page }) => {
  await page.goto('/');

  // Check title
  await expect(page).toHaveTitle(/PID Graphs/);

  // Navigate to Recharts Dashboard specifically
  // We locate the container that contains 'Recharts:' and find its own 'Dashboard' link
  const rechartsContainer = page.locator('.breadcrumb-link-container').filter({ hasText: 'Recharts:' });
  await rechartsContainer.getByRole('link', { name: 'Dashboard' }).click();

  await expect(page).toHaveURL(/.*recharts/);
});
