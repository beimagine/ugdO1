/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "localhost",
        "d3a5rnyctxz7gc.cloudfront.net",
        "bitmemoir.s3.amazonaws.com",
        "localhost:3000",
      ],
      // remotePatterns: [
      //   {
      //     protocol: "http",
      //     hostname: "localhost",
      //     port: "8000",
      //     pathname: "/**",
      //   },
      // ],
    },
  };
  
  module.exports = nextConfig;