import { expect, test } from '@playwright/test';

test.describe("msc-button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('index.html');
    await page.content();
  });

  test(`Emits a button`, async ({ page }) => {
    await page.setContent(/* html */`
    <msc-button>
      Test button
    </msc-button>
  `);

    const button = page.getByRole("button", { name: "Test button" });

    expect(button).toBeDefined();
  })
})