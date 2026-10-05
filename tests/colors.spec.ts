import { expect, test } from "@playwright/test";

test("Human ART color roles use the manual's opaque palette", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const backgrounds = {
    ".inline-sticky-button": "rgb(0, 171, 151)",
    ".booth-info-block__number": "rgb(0, 171, 151)",
    ".icon-cards-block__card": "rgb(225, 223, 213)",
    ".highlight-block": "rgb(0, 15, 46)",
    ".highlight-block__card": "rgb(0, 171, 151)",
    ".client-statements-block": "rgb(225, 223, 213)",
    ".products-block": "rgb(0, 15, 46)",
    ".products-block__zone--black-middle": "rgb(0, 15, 46)",
    ".fair-booking": "rgb(0, 171, 151)",
    ".fair-booking__content-container": "rgb(255, 255, 255)",
    ".distributor-selection__content-card": "rgb(225, 223, 213)",
    ".distributor-selection__selection-card": "rgb(211, 206, 192)",
    ".content-block": "rgb(240, 243, 245)",
    ".footer-block": "rgb(0, 15, 46)",
  };

  for (const [selector, color] of Object.entries(backgrounds)) {
    await expect(page.locator(selector).first()).toHaveCSS("background-color", color);
    await expect(page.locator(selector).first()).toHaveCSS("opacity", "1");
  }

  await expect(page.locator(".booth-info-block__description")).toHaveCSS("color", "rgb(61, 61, 60)");
  await expect(page.locator(".booth-info-block__cta .button")).toHaveCSS("background-color", "rgb(0, 127, 112)");
  await expect(page.locator(".fair-booking__step--disabled").first()).toHaveCSS("opacity", "1");
  await expect(page.locator(".textfield.is-disabled").first()).toHaveCSS("background-color", "rgb(240, 243, 245)");
});

test("text on brand surfaces meets WCAG AA contrast", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });

  const selectors = [
    ".inline-sticky-button",
    ".booth-info-block__headline",
    ".booth-info-block__number",
    ".booth-info-block__description",
    ".booth-info-block__cta .button",
    ".icon-cards-block__card-headline",
    ".icon-cards-block__card-description",
    ".highlight-block__headline",
    ".highlight-block__description",
    ".highlight-block__card-headline",
    ".highlight-block__card-description",
    ".client-statements-block__text-wrapper h3",
    ".client-statements-block__author-name",
    ".client-statements-block__author-role",
    ".products-block__headline",
    ".products-block__item-headline",
    ".products-block__caption",
    ".products-block__cta .button",
    ".team-members-block__name",
    ".team-members-block__position",
    ".fair-booking__headline",
    ".fair-booking__description",
    ".fair-booking__weekday-header",
    ".distributor-selection__headline",
    ".distributor-selection__description",
    ".distributor-selection__company-name",
    ".distributor-selection__website-link",
    ".distributor-selection__info-label",
    ".distributor-selection__info-value a",
    ".content-block__col",
    ".footer-block__button",
    ".footer-block__legal-link",
  ];

  const contrasts = await page.evaluate((selectors) => {
    function luminance(color: string) {
      const [r, g, b] = color.match(/[\d.]+/g)!.slice(0, 3).map((value) => {
        const channel = Number(value) / 255;
        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }

    return selectors.flatMap((selector) => [...document.querySelectorAll(selector)].map((element) => {
      let surface: Element | null = element;
      let background = "rgba(0, 0, 0, 0)";
      while (surface && background === "rgba(0, 0, 0, 0)") {
        background = getComputedStyle(surface).backgroundColor;
        surface = surface.parentElement;
      }
      const foreground = luminance(getComputedStyle(element).color);
      const backdrop = luminance(background);
      return { selector, ratio: (Math.max(foreground, backdrop) + 0.05) / (Math.min(foreground, backdrop) + 0.05) };
    }));
  }, selectors);

  for (const { selector, ratio } of contrasts) {
    expect(ratio, `${selector} contrast`).toBeGreaterThanOrEqual(4.5);
  }
});
