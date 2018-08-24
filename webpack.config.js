const path = require('path');
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ],
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
    ]
    }
};