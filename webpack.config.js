/* eslint-disable */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash].js',
    library: {
      type: 'umd',
      name: 'My Library'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack app',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ],
}
