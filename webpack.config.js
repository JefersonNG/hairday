const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const copyPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "app[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "src/assets"
    },
    port: 9000,
    open: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html",
      favicon: path.resolve(__dirname, "src", "assets", "scissors.svg")
    }),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]"
        }
      }
    ]
  }
}