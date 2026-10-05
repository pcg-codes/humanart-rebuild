import { expect, test } from "@playwright/test";

test("header decoration shifts left and logos grow only on mobile", async ({ page }, testInfo) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const decoration = page.locator(".header-block__decoration");
  const logos = page.locator(".header-block__logo");

  if (page.viewportSize()!.width < 768) {
    for (const width of [320, 390]) {
      await page.setViewportSize({ width, height: 844 });
      await expect(decoration).toHaveCSS("left", "-128px");
      const boxes = await logos.evaluateAll((images) => images.map((image) => {
        const { x, y, width, height } = image.getBoundingClientRect();
        return { x, y, width, height };
      }));
      for (const box of boxes) {
        expect(box.width).toBeGreaterThanOrEqual(88);
        expect(box.height).toBe(box.width);
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(width);
      }
      expect(boxes[0].x + boxes[0].width).toBeLessThan(boxes[1].x);
      expect(boxes[0].y).toBe(boxes[1].y);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
  } else {
    await expect(decoration).toHaveCSS("left", "0px");
    await expect(logos.first()).toHaveCSS("width", "160px");
  }

  await page.locator(".header-block").screenshot({ path: testInfo.outputPath("header.png") });
});
