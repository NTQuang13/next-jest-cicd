const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  ...(isGithubPages && {
    basePath: "/next-jest-cicd",
    assetPrefix: "/next-jest-cicd",
  }),
};

module.exports = nextConfig;
