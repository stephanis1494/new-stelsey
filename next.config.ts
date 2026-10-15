import type { NextConfig } from "next"

const API_URL = process.env.API_URL ?? "http://localhost:8080"

const nextConfig: NextConfig = {
  // Proxy /api to the Spring backend so the browser sees a single origin
  // (session + CSRF cookies just work, no CORS needed).
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${API_URL}/api/:path*` }]
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
