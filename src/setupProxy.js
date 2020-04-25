const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use([
    '/prod'
  ], createProxyMiddleware({
    target: 'https://data.nba.net',
    secure: false,
    changeOrigin: true
  }));
};
