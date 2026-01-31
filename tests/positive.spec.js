const { test, expect } = require("@playwright/test");

test.beforeEach(async({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
});

// Helper function
async function runPositiveTest(page, inputText, expectedText) {
    const input = page.locator("textarea");

    const output = page.locator(
        "//div[contains(text(),'Sinhala')]/following-sibling::div[1]"
    );

    await input.fill(inputText);

    await expect(output).not.toHaveText("");

    const result = await output.textContent();

    expect(result).toContain(expectedText);
}

/* ---------------- POSITIVE FUNCTIONAL TESTS ---------------- */

test("Pos_Fun_0001", async({ page }) => {
    await runPositiveTest(page, "oyaalaa kaaladha inne?", "ඔයාලා කාලද ඉන්නේ?");
});

test("Pos_Fun_0002", async({ page }) => {
    await runPositiveTest(
        page,
        "oyaa enavaanam vitharak mama ennam.",
        "ඔයා එනවානම් විතරක් මම එන්නම්."
    );
});

test("Pos_Fun_0003", async({ page }) => {
    await runPositiveTest(
        page,
        "oyaalaa okkomallaa ekathu velaa kohe yannadha hithaagena inne?",
        "ඔයාලා ඔක්කොමල්ලා එකතු වෙලා කොහෙ යන්නද හිතාගෙන ඉන්නේ?"
    );
});

test("Pos_Fun_0004", async({ page }) => {
    await runPositiveTest(
        page,
        "oyaalaa hamootama suba rathriyak",
        "ඔයාලා හමෝටම සුබ රත්‍රියක්"
    );
});

test("Pos_Fun_0005", async({ page }) => {
    await runPositiveTest(
        page,
        "iiLaga maasayee api aluth project ekak patan gannavaa",
        "ඊළග මාසයේ අපි අලුත් project එකක් පටන් ගන්නවා"
    );
});

test("Pos_Fun_0006", async({ page }) => {
    await runPositiveTest(
        page,
        "eeka kalinma liyala thiyenavaa kiyala kivvaa",
        "ඒක කලින්ම ලියල තියෙනවා කියල කිව්වා"
    );
});

test("Pos_Fun_0007", async({ page }) => {
    await runPositiveTest(
        page,
        "client feedback eka nam hari important",
        "client feedback එක නම් හරි important"
    );
});

test("Pos_Fun_0008", async({ page }) => {
    await runPositiveTest(
        page,
        "late unaata sorry adha reply karanne",
        "late උනාට sorry අද reply කරන්නේ"
    );
});

test("Pos_Fun_0009", async({ page }) => {
    await runPositiveTest(
        page,
        "baya venna epaa heta hariyata fix karannam",
        "බය වෙන්න එපා හෙට හරියට fix කරන්නම්"
    );
});

test("Pos_Fun_0010", async({ page }) => {
    await runPositiveTest(
        page,
        "email ekak evala LinkedIn profile eka attach karanna.",
        "email එකක් එවල LinkedIn profile එක attach කරන්න."
    );
});

test("Pos_Fun_0011", async({ page }) => {
    await runPositiveTest(
        page,
        "mama adha ehema karanavaa.",
        "මම අද එහෙම කරනවා."
    );
});

test("Pos_Fun_0012", async({ page }) => {
    await runPositiveTest(page, "poddak hithala karanna", "පොඩ්ඩක් හිතල කරන්න");
});

test("Pos_Fun_0013", async({ page }) => {
    await runPositiveTest(
        page,
        "eka hari dha kiyala sure nae",
        "එක හරි ද කියල sure නැ"
    );
});

test("Pos_Fun_0014", async({ page }) => {
    await runPositiveTest(
        page,
        "mama gedhara yanna hithuvaa, namuth traffic nisaa late unaa.",
        "මම ගෙදර යන්න හිතුවා, නමුත් traffic නිසා late උනා."
    );
});

test("Pos_Fun_0015", async({ page }) => {
    await runPositiveTest(
        page,
        "USB eka PC ekata connect karala balanna.",
        "USB එක PC එකට connect කරල බලන්න."
    );
});

test("Pos_Fun_0016", async({ page }) => {
    await runPositiveTest(
        page,
        "karunaakaralaa mata meeka pahadhili karanna puluvandha?",
        "කරුනාකරලා මට මේක පහදිලි කරන්න පුලුවන්ද?"
    );
});

test("Pos_Fun_0017", async({ page }) => {
    await runPositiveTest(
        page,
        "WiFi connection eka slow venavaa.",
        "WiFi connection එක slow වෙනවා."
    );
});

test("Pos_Fun_0018", async({ page }) => {
    await runPositiveTest(page, "kalpanaaven inna.", "කල්පනාවෙන් ඉන්න.");
});

test("Pos_Fun_0019", async({ page }) => {
    await runPositiveTest(page, "meeka hari lassanayi!", "මේක හරි ලස්සනයි!");
});

test("Pos_Fun_0020", async({ page }) => {
    await runPositiveTest(
        page,
        "oyaa enakota mama kaeema hadhala thiyannam.",
        "ඔයා එනකොට මම කෑම හදල තියන්නම්."
    );
});

test("Pos_Fun_0021", async({ page }) => {
    await runPositiveTest(page, "adha 2026-01-29 nedha?", "අද 2026-01-29 නේද?");
});

test("Pos_Fun_0022", async({ page }) => {
    await runPositiveTest(
        page,
        "api okkoma ekathu velaa vadee karamu.",
        "අපි ඔක්කොම එකතු වෙලා වඩේ කරමු."
    );
});

test("Pos_Fun_0023", async({ page }) => {
    await runPositiveTest(
        page,
        "mee potha rupiyal 500k venavaa.",
        "මේ පොත රුපියල් 500ක් වෙනවා."
    );
});

test("Pos_Fun_0024", async({ page }) => {
    await runPositiveTest(
        page,
        "karunaakara methana kiyavanna.",
        "කරුනාකර මෙතන කියවන්න."
    );
});