module.exports = {
  publicPath: '/child/vue3/',
  devServer: {
    port: 8089,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}
