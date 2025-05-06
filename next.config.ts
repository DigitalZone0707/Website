import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
