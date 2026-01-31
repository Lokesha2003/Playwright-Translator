const { test, expect } = require("@playwright/test");

test.beforeEach(async({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
});

/* ================= UI TEST CASES ================= */

test("Pos_UI_0035", async({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    const input = page.locator("textarea");

    await input.type("oyaa enavaanam vitharak mama ennam.", { delay: 50 });

    await page.waitForSelector("text=ඔයා එනවානම් විතරක් මම එන්නම්.");
});