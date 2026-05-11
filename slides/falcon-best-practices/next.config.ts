import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/falcon-best-practices",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
