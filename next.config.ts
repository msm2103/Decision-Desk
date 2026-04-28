import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/profile", destination: "/about", permanent: true },
      { source: "/about-mark-martin", destination: "/about", permanent: true },
      { source: "/playbook", destination: "/case-studies", permanent: true },
      { source: "/work-with-me", destination: "/contact", permanent: true },
      { source: "/subscribe", destination: "/contact", permanent: true },
      { source: "/unsubscribe", destination: "/contact", permanent: true },
      { source: "/guest-pms", destination: "/case-studies", permanent: true },
      { source: "/guest-pms/:path*", destination: "/case-studies", permanent: true },
    ];
  },
};

export default nextConfig;
