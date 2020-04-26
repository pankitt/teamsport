const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use([
    '/prod/v2'
  ], createProxyMiddleware({
    target: 'https://data.nba.net',
    secure: false,
    changeOrigin: true
  }));

  app.use([
    '/api/s3'
  ], createProxyMiddleware({
    target: 'https://www.championshockeyleague.com',
    secure: false,
    changeOrigin: true
  }));
};
