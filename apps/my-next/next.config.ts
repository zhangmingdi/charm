import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //     return [
  //       {
  //         source: '/cn', // 匹配根路径
  //         destination: '/cn/home', // 映射到 /cn/home
  //       },
  //       {
  //         source: '/en', // 匹配根路径
  //         destination: '/en/home', // 映射到 /cn/home
  //       },
  //     ];
  //   },
};

export default withNextIntl(nextConfig);
