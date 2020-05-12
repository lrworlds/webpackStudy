const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const removeCommentsPlugin = require('./remove-comments-plugin.js')

const config = {
  mode: "none",
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'demo 01'
    }),
    new CleanWebpackPlugin(),
    new copyWebpackPlugin(['./src/public']),  //复制目录
    new removeCommentsPlugin()
  ]
}
module.exports = config