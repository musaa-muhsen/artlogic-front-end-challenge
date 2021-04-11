const path = require('path');
//const regeneratorRuntime = require("regenerator-runtime");


module.exports = {
    entry: {
        main: "./client/app.js"
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  '@babel/transform-runtime'
              ]
              }
            }
          }
        ]
        },
        // [
        //   "plugins": ["@babel/plugin-transform-runtime"],

        // ]
       

    output: {
        //filename: "main.[contenthash].js",
        filename: "index_bundle.js",
        path: path.resolve(__dirname, "./client/dist"),
    }
}