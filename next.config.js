/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lacanica.blob.core.windows.net",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
