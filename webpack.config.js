"use strict";
var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    webpack = require("webpack");

module.exports = {
  entry: {
    app: ["./app/index"],
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
