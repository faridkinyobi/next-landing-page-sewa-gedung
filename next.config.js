const dotenv = require("dotenv");
dotenv.config();
/** @type {import('next').NextConfig} */

module.exports = {
  // output: "standalone",
  env: {
    API_URL: process.env.NEXT_PUBLIC_API,
  },
  publicRuntimeConfig: {
    NEXT_APP_IMAGE_BASE_URL: process.env.NEXT_APP_IMAGE_BASE_URL,
  },
  distDir: ".next",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000", // Specify the port if needed
        pathname: "/upload/**",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_API.replace(/^https?:\/\//, ''),
        port: "",
        pathname: "/upload/**",
      },
    ],
  },

};
