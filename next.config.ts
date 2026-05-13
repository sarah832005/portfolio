import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio",    // <--- Ajoute cette ligne
  assetPrefix: "/portfolio", // <--- Ajoute cette ligne
  images: { unoptimized: true },
};

export default nextConfig;