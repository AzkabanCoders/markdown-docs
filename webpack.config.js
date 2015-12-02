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
        loaders: [
          "style",
          "css?sourceMap",
          "sass?sourceMap"
        ]
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  }
};
