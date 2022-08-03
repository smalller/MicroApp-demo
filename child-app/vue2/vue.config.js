module.exports = {
  publicPath: '/child/vue2/',
  devServer: {
    port: 8088,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
