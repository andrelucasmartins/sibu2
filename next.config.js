/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  compiler: {
    removeConsole: true,
  },
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"]
  },
  output: "export",
  images: { 
    unoptimized: true,
    remotePatterns: [{
      protocol: "https",
      hostname: "image.tmdb.org",
      pathname: "/t/p/w1280/**",
      port: "",
  }]
  },
};

module.exports = nextConfig;
