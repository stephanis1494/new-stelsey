import type { NextConfig } from "next"

const API_URL = process.env.API_URL ?? "http://localhost:8080"

const nextConfig: NextConfig = {
  // Proxy /api to the Spring backend so the browser sees a single origin
  // (session + CSRF cookies just work, no CORS needed).
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${API_URL}/api/:path*` }]
  },
  // Lets next/image resize and re-encode photos from the R2 bucket's custom domain,
  // so visitors get small, metadata-free versions instead of the multi-MB originals.
  images: {
    remotePatterns: [new URL("https://images.stelsey.com/**")],
  },
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              // SVGO strips `viewBox` when it matches width/height, which
              // breaks scaling the icons with CSS. Keep it.
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: { overrides: { removeViewBox: false } },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
}

export default nextConfig
