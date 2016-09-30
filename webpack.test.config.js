var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    p1: __dirname + "/app/page1.js",
    p2: __dirname + "/app/page2.js",
    common: __dirname + "/app/common.js"
      // vendor: ["jquery"]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name]-[chunkhash].js"
  },
  module: {
    loaders: [{
      test: /\.hbs$/,
      loader: "handlebars-loader"
    }, {
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },
  postcss: [
    require('autoprefixer')
  ],
  // resolve: { //单独打包css文件
  //   alias: {
  //     style: __dirname + "/app/style.css"
  //   }
  // },
  // plugins: [
  //   new HtmlWebpackPlugin(),
  //   new webpack.optimize.CommonsChunkPlugin("common", "[name]-[chunkhash].js"),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new ExtractTextPlugin("[name]-[chunkhash].css")
  // ]

}