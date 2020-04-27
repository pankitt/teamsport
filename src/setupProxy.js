const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use([
    '/prod/v2'
  ], createProxyMiddleware({
    target: 'https://data.nba.net',
    secure: false,
    changeOrigin: true,
    cookieDomainRewrite: '',
    cookiePathRewrite: ''
  }));
  app.use([
    '/graphql'
  ], createProxyMiddleware({
    target: 'https://scores24.live',
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

  app.use([
    '/static/site'
  ], createProxyMiddleware({
    target: 'https://static.nfl.com',
    secure: false,
    changeOrigin: true,
    cookieDomainRewrite: ''
  }));
};
