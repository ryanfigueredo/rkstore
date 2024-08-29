/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shopimagesrc.s3.us-east-2.amazonaws.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
