import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // {
      //   source: '/cn', // 匹配根路径
      //   destination: '/cn/home', // 映射到 /cn/home
      // },
      // {
      //   source: "/", // 匹配根路径
      //   destination: "/en", // 映射到 /cn/home
      // },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
