/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "disease.sh",
       
      }
    ]
  }
};

module.exports = nextConfig;
