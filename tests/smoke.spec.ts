import { test, expect } from "@playwright/test";

test.describe("Portfolio Smoke Tests", () => {
  test("home page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Binh Nguyen/i);
    await expect(page.locator("body")).toBeVisible();
  });

  test("project page loads with visible content", async ({ page }) => {
    await page.goto("/project");
    await expect(page).toHaveTitle(/Binh Nguyen \| Project Page/i);
    await expect(
      page.getByText("Coding garden", { exact: false })
    ).toBeVisible();
  });

  test("about page loads with visible content", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/Binh Nguyen \| About Page/i);
    await expect(
      page.getByText("Start from the passion", { exact: false })
    ).toBeVisible();
  });

  test("certificate page loads with visible content", async ({ page }) => {
    await page.goto("/certificate");
    await expect(page).toHaveTitle(/Binh Nguyen \| Certificates Page/i);
    await expect(
      page.getByText("All Certificates", { exact: false })
    ).toBeVisible();
  });
});