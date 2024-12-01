// webpack.config.js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./srcs/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
    watchFiles: ["./srcs/*.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./srcs/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        oneOf: [
          {
            // Optimize images with image-webpack-loader for files in the asset folder
            resourceQuery: /optimize/,
            use: [
              {
                loader: "file-loader",
              },
              {
                loader: "image-webpack-loader",
                options: {
                  mozjpeg: {
                    progressive: true,
                    quality: 65,
                  },
                  optipng: {
                    enabled: true,
                  },
                  pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                  },
                  gifsicle: {
                    interlaced: false,
                  },
                  webp: {
                    quality: 75,
                  },
                },
              },
            ],
          },
          {
            // Default behavior for other images (using asset/resource)
            type: "asset/resource",
          },
        ],
      },
    ],
  },
};
