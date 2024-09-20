/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
    serverBuildTarget: "vercel",
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    devServerPort: 8002, // Ensure this port is open for local development.
    ignoredRouteFiles: ["**/.*"],
    serverDependenciesToBundle: [
      /^remix-utils.*/,
    ],
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
    serverBuildPath: "build/index.js",
    appDirectory: "src/app",
  };