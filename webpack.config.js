/* eslint-disable import/no-dynamic-require */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const loadPreset = require('./config/presets/loadPreset');

// eslint-disable-next-line global-require
const loadConfig = (mode) => require(`./config/webpack.${mode}.js`)(mode);

module.exports = (env) => {
 const { mode = 'production' } = env || {};
 return merge(
  {
   mode,
   entry: {
    main: path.resolve(__dirname, './src/index.js'),
   },
   output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
   },
   module: {
    rules: [
     // JavaScript
     {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
       loader: 'babel-loader',
       options: {
        presets: ['@babel/preset-env'],
       },
      },
     },
     {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
     },
     {
      test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
      type: 'asset/inline',
     },
     {
      test: /\.html$/,
      use: {
       loader: 'html-loader',
      },
     },
    ],
   },
   plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
     template: path.resolve(__dirname, './src/index.html'),
     filename: 'index.html',
     minify: {
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
     },
    }),
   ],
   resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
   },
  },
  loadConfig(mode),
  loadPreset(env),
 );
};
