const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // process.env.REACT_APP_BACK_SERVER_URL
  const target = "https://sac.monster";

  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
