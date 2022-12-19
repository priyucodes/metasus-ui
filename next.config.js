/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // current deploying next13 apps have some bugs and doesnt work as intended
    // appDir: true,
    appDir: false,
  },
};

module.exports = nextConfig;
