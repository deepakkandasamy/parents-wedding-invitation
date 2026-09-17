import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/parents-wedding-invitation",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
