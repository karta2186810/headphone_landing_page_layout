const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, 'js/index.js'),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ]
}