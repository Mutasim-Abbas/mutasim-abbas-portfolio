/** @type {import('next').NextConfig} */

/**
 * Vercel is the only deploy target, and it serves this at the domain root, so
 * there is no path prefix.
 *
 * There used to be one. This was a GitHub Pages *project site* as well, which
 * is served under /<repo-name>/ and therefore needed every asset and route
 * prefixed; the prefix was switched off by testing for Vercel's VERCEL=1. That
 * second copy was retired on 2026-08-07 — it had been serving a stale build for
 * two weeks because its deploy job kept timing out, and nothing detected the
 * drift. Keeping one deploy target is the point; do not reintroduce a prefix
 * unless a subpath deployment actually comes back.
 */
const basePath = "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Static export, served by Vercel.
  output: "export",
  basePath,
  // Exposed to client code so the manual asset prefixes in lib/content.ts
  // resolve to the same place the framework is actually serving from.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
};

export default nextConfig;
