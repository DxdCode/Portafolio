import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
