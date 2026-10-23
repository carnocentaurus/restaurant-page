// webpack.config.js
import path from "node:path";

import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  devServer: {
    compress: true,
    port: 8080,
    open: true,
    historyApiFallback: true,
  },
};