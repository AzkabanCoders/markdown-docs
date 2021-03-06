"use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require("webpack");

module.exports = {
  entry: {
    app: [`${__dirname}/app/index`],
    vendor: ["react"]
  },
  output: {
    path: "./app/build",
    filename: "js/app.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".scss"]
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass")
      },
      {
        test: /\.svg$/,
        loader: "raw-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css", {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "js/vendor.bundle.js")
  ]
};
