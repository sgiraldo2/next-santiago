/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    newNextLinkBehavior: false,
  },
  output: 'export',
};

module.exports = nextConfig;
