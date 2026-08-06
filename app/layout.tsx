import type { Metadata, Viewport } from "next";

// Self-hosted fonts via @fontsource (offline-safe, no CDN, no layout shift).
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource-variable/inter";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

import "./globals.css";

/**
 * Absolute base for Open Graph / Twitter card URLs. Vercel exposes the stable
 * production domain at build time, so a Vercel deploy gets the right value with
 * nothing to configure; the literal below is the fallback for builds run
 * anywhere else, and has to stay a real reachable URL because Open Graph
 * consumers fetch it. Set NEXT_PUBLIC_SITE_URL to override (e.g. once a custom
 * domain is attached).
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://mutasim-abbas-portfolio.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mutasim Abbas — Software Engineer",
  description:
    "Portfolio of Mutasim Abbas, a software engineering student. Builder of VisSort and Modus — precise, disciplined, cinematic engineering.",
  keywords: [
    "Mutasim Abbas",
    "software engineer",
    "software engineering student",
    "portfolio",
    "React",
    "TypeScript",
    "VisSort",
    "Modus",
  ],
  authors: [{ name: "Mutasim Abbas" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Mutasim Abbas — Software Engineer",
    description:
      "Builder of VisSort and Modus. A software engineer's terminal, lit from within.",
    siteName: "Mutasim Abbas",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mutasim Abbas — Software Engineer",
    description:
      "Builder of VisSort and Modus. A software engineer's terminal, lit from within.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070b0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
