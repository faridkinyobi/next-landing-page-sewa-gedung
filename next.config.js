/** @type {import('next').NextConfig} */
module.exports = {
  // Konfigurasi lainnya di sini
  // output: "standalone",
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    // Add custom webpack configurations here
    const path = require('path');
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
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
        hostname: "apigedung.pojokbambu.com",
        port: "",
        pathname: "/upload/**",
      },
    ],
  },
  // future: {
  //   webpack5: true, // Atur ke true jika kamu menggunakan webpack 5
  // },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }

  //   return config;
  // },
};
