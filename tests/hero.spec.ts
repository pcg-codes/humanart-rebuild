import { expect, test } from "@playwright/test";

test("hero content is centered and stacks on mobile", async ({ page }, testInfo) => {
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const hero = page.locator(".hero-block");
  const headline = page.locator(".hero-block__headline");
  const subheadline = page.locator(".hero-block__subheadline");
  const action = page.locator(".hero-block__action");
  const wrapper = page.locator(".hero-block__subheadline-wrapper");
  await expect(headline).toHaveCSS("text-align", "center");
  await expect(subheadline).toHaveCSS("text-align", "center");

  const heroBox = (await hero.boundingBox())!;
  const headlineBox = (await headline.boundingBox())!;
  const wrapperBox = (await wrapper.boundingBox())!;
  const center = heroBox.x + heroBox.width / 2;
  for (const box of [headlineBox, wrapperBox]) {
    expect(Math.abs(box.x + box.width / 2 - center)).toBeLessThan(1);
  }

  expect(heroBox.height).toBeGreaterThanOrEqual(page.viewportSize()!.height / 2);
  if (page.viewportSize()!.width < 768) {
    await expect(wrapper).toHaveCSS("flex-direction", "column");
    const subheadlineBox = (await subheadline.boundingBox())!;
    const actionBox = (await action.boundingBox())!;
    expect(subheadlineBox.y).toBeGreaterThan(headlineBox.y + headlineBox.height);
    expect(actionBox.y).toBeGreaterThan(subheadlineBox.y + subheadlineBox.height);
    for (const box of [subheadlineBox, actionBox]) {
      expect(Math.abs(box.x + box.width / 2 - center)).toBeLessThan(1);
    }
  } else {
    await expect(wrapper).toHaveCSS("flex-direction", "row");
  }

  await hero.screenshot({ path: testInfo.outputPath("hero.png") });
});
