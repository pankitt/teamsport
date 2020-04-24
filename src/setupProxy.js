const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use([], createProxyMiddleware({
    // target: process.env.PROXY_TARGET,
    changeOrigin: true
  }));
};
