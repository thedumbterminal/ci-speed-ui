const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" }
      ],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'docs')
  }
}
