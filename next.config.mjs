/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/login", // /login 요청을 프록시
        destination: "http://43.200.141.226/login", // 실제 API 경로
      },
      {
        source: "/:path*", // 모든 /api/v1/* 요청을 프록시
        destination: "http://43.200.141.226/:path*", // 해당 경로로 프록시
      },
    ];
  },
};

export default nextConfig;
