/** @type {import('next').NextConfig} */
module.exports = {
  // Konfigurasi lainnya di sini
  reactStrictMode: true,
  // distDir:"build",
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
        hostname: "sewagedungcangkol.com.pojokbambu.com",
        port: "",
        pathname: "/upload/**",
      },
    ],
  },
};
