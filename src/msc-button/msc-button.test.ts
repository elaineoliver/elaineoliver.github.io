import { expect, test } from "@playwright/test";

test.describe("msc-button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("msc.html");
    await page.content();
  });

  test(`Emits a button`, async ({ page }) => {
    const button = page.getByRole("button", { name: "Primary button dark" });
    await button.focus();
    await expect(button).toBeFocused();
  });

  test(`Submits a form`, async ({ page }) => {
    const button = page.getByRole("button", { name: "Submit" });
    await button.click();
    const feedback = page.getByText("The form was submitted");
    expect(feedback).toBeDefined();
  });

  test(`Looks fabulous`, async ({ page }) => {
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot({ maxDiffPixels: 10 });
  });
});
