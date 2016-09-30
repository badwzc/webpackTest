var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
module.exports = {
  entry: {
    // common: __dirname + "/app/common.js",
    p1: __dirname + "/app/page1.js",
    p2: __dirname + "/app/page2.js",
    // common: __dirname + "/app/common.js"
      // vendor: ["jquery"]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name]-[chunkhash].js", //入口文件的命名规则 page1.js
    chunkFilename: "[id]-[chunkhash].js",//非入口文件的命名规则 greeting.js
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
  resolve: { //单独打包css文件
    alias: {
      style: __dirname + "/app/style.css"
    }
  },
  plugins: [
  /*生成单个页面, 每个页面都要用一个HtmlWebpackPlugin 插件单独生成*/
    new HtmlWebpackPlugin({
      css: [__dirname + "/app/style.css"],
      filename: "page1.html",
      template: __dirname + "/app/page1.html",
      chunks: ['p1', 'common']
    }),
    new HtmlWebpackPlugin({
      css: [__dirname + "/app/style.css"],
      filename: "page2.html",
      template: __dirname + "/app/page2.html",
      chunks: ['p2', 'common']
    }),
  /**/
    new CommonsChunkPlugin({
      filename: "common-[chunkhash].js",
      name: "common",
      // chunks: ["p1", "p2"],
      // children: true,
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style-[chunkhash].css")
  ]

}