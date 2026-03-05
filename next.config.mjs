/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // assetPrefix: process.env.BUN_ENV === "production" ? "/assignment-vnr202" : "",
  // basePath: process.env.BUN_ENV === "production" ? "/assignment-vnr202" : "",
};

export default nextConfig;