import type { CSSProperties, ReactNode } from "react";
import { imagePath } from "@/data/site";

const renditionProfiles = {
  team: { widths: [640, 828], descriptors: ["1x", "2x"] },
  product: { widths: [1920, 3840], descriptors: ["1x", "2x"] },
  highlightLogo: { widths: [256, 640], descriptors: ["1x", "2x"] },
  footerLogo: { widths: [256, 384], descriptors: ["1x", "2x"] },
  poster: { widths: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], sizes: "(max-width: 1200px) 100vw, 80vw" },
  expert: { widths: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], sizes: "100vw" },
} as const;

function renderedImagePath(file: string, width: number) {
  return `/images/rendered/${encodeURIComponent(file)}-${width}.webp`;
}

export function LocalImage({
  file,
  alt,
  className,
  width,
  height,
  style,
  priority = false,
  rendition,
}: {
  file: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  priority?: boolean;
  rendition?: keyof typeof renditionProfiles;
}) {
  const profile = rendition ? renditionProfiles[rendition] : undefined;
  const srcSet = profile?.widths.map((width, index) =>
    `${renderedImagePath(file, width)} ${"descriptors" in profile ? profile.descriptors[index] : `${width}w`}`,
  ).join(", ");
  return (
    // Assets are deliberately served as local files, without an image API.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={profile ? renderedImagePath(file, profile.widths[profile.widths.length - 1]) : imagePath(file)}
      srcSet={srcSet}
      sizes={profile && "sizes" in profile ? profile.sizes : undefined}
      alt={alt}
      className={className}
      width={width}
      height={height}
      style={style}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}

export function ExternalArrow() {
  return (
    <svg width="1.25em" height="1.25em" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M25.5 12.5V17.7H42.634L12.5 47.834L16.166 51.5L46.3 21.366V38.5H51.5V12.5H25.5Z" fill="currentColor" />
    </svg>
  );
}

export function VisualButton({ children, arrow = true }: { children: ReactNode; arrow?: boolean }) {
  return (
    <span className="visual-button">
      <button className="button button--primary" type="button" tabIndex={-1} aria-disabled="true">
        <span className="button__label">{arrow && <ExternalArrow />}{children}</span>
      </button>
    </span>
  );
}

export function VisualCard({
  className,
  media,
  headline,
  children,
}: {
  className: string;
  media: ReactNode;
  headline: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={`visual-card ${className}`}>
      <div className="card">
        <div className="card__media-area"><div className="card__image">{media}</div></div>
        <div className="card__body">
          <div className="card__headline-wrapper">{headline}</div>
          <div className="card__content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function VisualLink({ children, className }: { children: ReactNode; className?: string }) {
  return <a className={className} role="link" aria-disabled="true" tabIndex={-1}>{children}</a>;
}
