const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = (env, options) => ({
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../server/public/'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|otf)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]!static',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    new Dotenv({
      path: `env/${options.stage || 'development'}.env`,
    }),
  ],
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
});
