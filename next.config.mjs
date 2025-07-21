/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/v3" : "",
  assetPrefix: isProd ? "/v3/" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;