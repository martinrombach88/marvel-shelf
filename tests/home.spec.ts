import { test, expect, type Page } from "@playwright/test"

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/")
  })

  test("clicking get should navigate to get page", async ({ page }) => {
    await page.getByTestId("getLink").click()
    await expect(page).toHaveURL("http://localhost:3000/get-comics")
  })

  test("clicking search should navigate to search page", async ({ page }) => {
    await page.getByTestId("searchLink").click()
    await expect(page).toHaveURL("http://localhost:3000/search-comics")
  })
})
