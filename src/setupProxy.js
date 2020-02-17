const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    proxy('/xkcd', {
      target: "https://xkcd.com",
      changeOrigin: true,
      pathRewrite: {
        '^/xkcd': '/', // rewrite path
      },
    }))
}
