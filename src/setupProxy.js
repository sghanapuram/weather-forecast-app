const { createProxyMiddleware } = require('http-proxy-middleware');

/*

setup manual proxy to avoid CORS errors

*/

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.metaweather.com',
      changeOrigin: true,
    })
  );
};
