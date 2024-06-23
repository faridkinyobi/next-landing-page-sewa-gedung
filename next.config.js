/** @type {import('next').NextConfig} */
module.exports = {
  // Konfigurasi lainnya di sini
  output: "standalone",
  reactStrictMode: true,
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
  future: {
    webpack5: true, 
  },
  webpack: (config, { isServer }) => {
    // Hanya tambahkan rules untuk CSS jika bukan server (client-side)
    if (!isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      });
    }

    return config;
  },
};
