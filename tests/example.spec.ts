import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Sauce Demo Landing", async () => {
  test('should be titled "Swag Labs"', async ({ page }) => {

    await expect(await page.getByText("Swag Labs")).toBeVisible;
  });
});
