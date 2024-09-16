import { expect, test } from '@playwright/test';

test.describe("msc-button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
    await page.content();
  });

  test(`Emits a button`, async ({ page }) => {
    const button = page.getByRole("button", { name: "Primary button" });

    expect(button).toBeDefined();
  })

  test(`Looks fabulous`, async ({ page }) => {
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot({ maxDiffPixels: 10 });
  })
})