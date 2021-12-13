/* eslint-disable import/no-dynamic-require */
/** @type {import('webpack').Configuration} */

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
      use: {
       loader: 'asset/inline',
       options: {
        url: false,
       },
      },
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
    new CopyWebpackPlugin({
     patterns: [
      {
       from: path.resolve(__dirname, 'public'),
       to: 'assets',
       globOptions: {
        ignore: ['*.DS_Store'],
       },
       noErrorOnMissing: true,
      },
     ],
    }),
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
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
     '@': path.resolve(__dirname, 'src'),
     assets: path.resolve(__dirname, 'public'),
    },
   },
  },
  loadConfig(mode),
  loadPreset(env),
 );
};
