import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [{ hostname: "liteflow.mypinata.cloud" }],
  },
};

export default nextConfig;
