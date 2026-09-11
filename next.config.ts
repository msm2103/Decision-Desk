import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/profile", destination: "/about", permanent: true },
      { source: "/about-mark-martin", destination: "/about", permanent: true },
      { source: "/playbook", destination: "/notes", permanent: true },
      { source: "/work-with-me", destination: "/contact", permanent: true },
      { source: "/case-studies", destination: "/notes", permanent: true },
      { source: "/guest-pms", destination: "/notes", permanent: true },
      { source: "/guest-pms/:path*", destination: "/notes", permanent: true },
      {
        source: "/notes/how-to-size-trades-in-a-leveraged-macro-portfolio",
        destination: "/notes",
        permanent: true,
      },
      {
        source: "/notes/portfolio-construction-turning-trade-ideas-into-a-rates-portfolio",
        destination: "/notes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
