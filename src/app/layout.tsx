import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meet Minitube Human ART at the ESHRE 2026 | Booth D37 | Minitube Human ART",
  description:
    "Join Minitube Human ART at ESHRE 2026. Discover innovative solutions for sperm preparation and analysis designed to simplify your daily lab routine.",
  icons: { icon: "/images/favicon-32x32.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
