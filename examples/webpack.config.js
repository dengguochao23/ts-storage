const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const devConfig = {
    mode: "development",
    entry: {
      app: './examples/app.ts',
    },
    output: {
      path: path.resolve(__dirname, './dist'),
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./examples/index.html",
        title: "ts-storage"
      })
    ],
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
          {
            test: /\.ts$/,
            enforce: 'pre',
            use: [
              {
                loader: 'tslint-loader',
              }
            ]
          },
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  transpileOnly: true
                }
              }
            ]
          }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 8900,
        compress: true,
        hot: true
    },
}
module.exports = devConfig
