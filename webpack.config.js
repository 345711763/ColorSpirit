const webpack =require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

const option = {
  entry: {
    abc: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map" /*幫助定位錯誤*/,
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader" // inject CSS to page
          },
          {
            loader: "css-loader" // translates CSS into CommonJS modules
          },
          {
            loader: "postcss-loader", // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [require("precss"), require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([
      "dist"
    ]) /* 每次運行 webpack 的時候會刪除之前生成的文件*/,
    new HtmlWebpackPlugin({
      /*讓webpack動態生成一個index.html文件并把bundle文件引入*/
      title: "Output Management" /*自動生成的html文件的title*/,
      template: "./src/index.html"
    }),
      new webpack.DefinePlugin(envKeys)
  ]
};

module.exports = option;
