const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [htmlPlugin, new CopyPlugin([{ from: 'data', to: 'data' }])],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.([tj]sx?|mjs)$/,
        exclude: /node_modules/,
        use: [
          // https://github.com/babel/babel-loader
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true, // cache output between builds
              cacheCompression: false,
            },
          },
          // https://github.com/TypeStrong/ts-loader
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    publicPath: '/',
    port: 8000,
  },
};
