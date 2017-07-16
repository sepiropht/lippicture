/* eslint no-console:0 */
const path = require("path");
const webpack = require("webpack");

const config = {
  devServer: {
    hot: true,
    publicPath: "/public/",
    historyApiFallback: true
  },
  context: __dirname,
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./js/ClientApp.jsx"
  ],
  devtool: process.env.NODE_ENV === "development"
    ? "cheap-eval-source-map"
    : false,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/public/"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve("js"),
          path.resolve("node_modules/preact-compat/src")
        ]
      }
    ]
  }
};

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  config.entry = "./js/ClientApp.jsx";
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
