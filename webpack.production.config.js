var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: __dirname + "/app/main.js",
    // vendor: ["jquery"]
  },
  output: {
    path: __dirname + "/build",
    filename: "[name]-[chunkhash].js"
  },
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  resolve: {//单独打包css文件
    alias: {
      style: __dirname + "/app/style.css"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"
    }),
    // new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("[name]-[chunkhash].css")
  ]

}