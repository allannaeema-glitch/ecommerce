const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    app: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },

    hot: false,
    port: 9000,
    open: true,

    devMiddleware: {
      writeToDisk: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      {
        test: /\.s?css$/i,

        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },

          "css-loader",
          "sass-loader"
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",

        generator: {
          filename: "./images/[name][ext]",
        },
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,

        type: "asset/resource",

        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),

   new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
    }),

    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),

    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html",
    }),

       new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
    }),

       new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),

    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],

  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};