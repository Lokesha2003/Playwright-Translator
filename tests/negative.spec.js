const { test, expect } = require("@playwright/test");

test.beforeEach(async({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
});

// Helper
async function runNegativeTest(page, inputText, unexpectedText) {
    const input = page.locator("textarea");

    const output = page.locator(
        "//div[contains(text(),'Sinhala')]/following-sibling::div[1]"
    );

    await input.fill(inputText);

    await expect(output).not.toHaveText("");

    const result = await output.textContent();

    expect(result).toContain(expectedText);
}
/* ---------------- NEGATIVE FUNCTIONAL TESTS ---------------- */

test("Neg_Fun_0001", async({ page }) => {
    await runNegativeTest(
        page,
        "ada ofz eke una issue ekaak nisa wada tika krna bri una"
    );
});

test("Neg_Fun_0002", async({ page }) => {
    await runNegativeTest(page, "oyagelapekafastda?");
});

test("Neg_Fun_0003", async({ page }) => {
    await runNegativeTest(page, "hetaa25kohehariiyanaenawda?oyal4ratawithara");
});

test("Neg_Fun_0004", async({ page }) => {
    await runNegativeTest(page, "beema bona enawda?");
});

test("Neg_Fun_0005", async({ page }) => {
    await runNegativeTest(page, "IsKoLe GiHiN sElAm KaLa");
});

test("Neg_Fun_0006", async({ page }) => {
    await runNegativeTest(page, "kdt ynwd");
});

test("Neg_Fun_0007", async({ page }) => {
    await runNegativeTest(page, "heta swimming pool yamuda?");
});

test("Neg_Fun_0008", async({ page }) => {
    await runNegativeTest(page, "mgelaptopekafixkaranna");
});

test("Neg_Fun_0009", async({ page }) => {
    await runNegativeTest(page, "heta selan karamuda?");
});

test("Neg_Fun_0010", async({ page }) => {
    await runNegativeTest(
        page,
        "oyalata kohomada? hodin inawa athi kiyala hithnawa, lagadima dawaska hambemu."
    );
});