const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const loaders = require('./loaders');


module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Server Explorer',
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '..', "dist"),
    },
    hot: true,
    compress: true,
    port: 3000,
  },
};
