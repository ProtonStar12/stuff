import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      {
        hostname:"cdn.mobygames.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "fastly.picsum.photos",
        protocol: "https",
        port: "",
      },
      {
        hostname: "raw.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "en.wikipedia.org",
        protocol: "https",
        port: "",
      },
      {
        hostname: "thebetanetwork.net",
        protocol: "https",
        port: "",
      }
    ]
  }
};

export default nextConfig;
