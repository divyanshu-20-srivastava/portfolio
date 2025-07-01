/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "nexlead-media.s3.us-east-2.amazonaws.com",
      "flambao.s3.eu-north-1.amazonaws.com",
    ],
  },
};

export default nextConfig;
