import { expect, test } from "@playwright/test";

test("complete static page, local assets, and no horizontal overflow", async ({ page }, testInfo) => {
  const externalRequests: string[] = [];
  const errors: string[] = [];
  const failedAssets: string[] = [];

  page.on("request", (request) => {
    if (!request.url().startsWith("http://127.0.0.1:4317")) externalRequests.push(request.url());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failedAssets.push(response.url());
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("h1")).toHaveText("Minitube Human ART at the ESHRE 42nd Annual Meeting");
  await expect(page.locator("main section")).toHaveCount(10);
  await expect(page.locator(".team-members-block__card")).toHaveCount(4);
  await expect(page.locator(".products-block__image")).toHaveCount(2);
  await expect(page.locator("a[href]")).toHaveCount(0);
  await expect(page.locator("#booking-name")).toBeDisabled();
  await expect(page.locator("#booking-email")).toBeDisabled();

  // Load every lazy image, then return to the initial layout.
  await page.evaluate(async () => {
    for (const image of document.images) {
      image.loading = "eager";
      await image.decode();
    }
  });
  expect(await page.evaluate(() => [...document.images].every((image) => image.naturalWidth > 0))).toBe(true);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  expect(externalRequests).toEqual([]);
  expect(failedAssets).toEqual([]);
  expect(errors).toEqual([]);

  await page.screenshot({ path: testInfo.outputPath("full-page.png"), fullPage: true });
});

test("layout matches the original section heights", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "tablet", "Reference measurements are desktop and mobile.");
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const actual = await page.locator("main section").evaluateAll((sections) =>
    sections.map((section) => section.getBoundingClientRect().height),
  );
  const expected = testInfo.project.name === "desktop"
    ? [500, 646, 480, 1254, 489.15625, 2155.75, 564.78125, 900, 700, 96]
    : [623.9375, 945.875, 1314, 1799.484375, 806.859375, 1915.75, 1971.921875, 1196, 906, 136];

  expect(actual).toHaveLength(expected.length);
  actual.forEach((height, index) => expect(Math.abs(height - expected[index])).toBeLessThan(1));
});

test("buttons are decorative and do not navigate or submit", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.locator(".inline-sticky-button").click({ force: true });
  await expect(page).toHaveURL("http://127.0.0.1:4317/");
  await page.locator(".highlight-block__play-button").click({ force: true });
  await expect(page.locator(".highlight-block__facade")).toBeVisible();
  await expect(page.locator(".highlight-block video")).toHaveCount(0);
  await expect(page.locator(".fair-booking__submit-button button")).toBeDisabled();
});
