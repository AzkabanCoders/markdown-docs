"use strict";
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: ["./app/main"]
  },
  output: {
    path: "./app",
    filename: "app.js"
  },
  resolve: {
    extensions: [
      "",
      ".js",
      ".jsx",
      ".scss"
    ]
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true
    })
  ]
};
