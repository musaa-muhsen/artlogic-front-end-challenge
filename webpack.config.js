const path = require('path');

module.exports = {
    entry: {
        main: "./app.js"
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
        },

    output: {
        //filename: "main.[contenthash].js",
        filename: "index_bundle.js",
        path: path.resolve(__dirname, "client/dist"),
    }
}