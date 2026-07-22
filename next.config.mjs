/** @type {import('next').NextConfig} */

/**
 * GitHub Pages serves this as a *project site*, so every asset and route has to
 * be prefixed with the repo name. Vercel serves it at the domain root, where
 * that same prefix points at paths which do not exist — the page loads but
 * every stylesheet, script and image 404s, leaving raw unstyled HTML.
 *
 * Vercel sets VERCEL=1 during its builds, so one repo deploys correctly to both
 * targets without anyone having to remember to edit this file first.
 */
const basePath = process.env.VERCEL ? "" : "/mutasim-abbas-portfolio";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export, served either as a GitHub Pages project site or by Vercel.
  output: "export",
  basePath,
  // Exposed to client code so the manual asset prefixes in lib/content.ts
  // resolve to the same place the framework is actually serving from.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
