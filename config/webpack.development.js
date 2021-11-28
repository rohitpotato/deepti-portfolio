const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
 // Control how source maps are generated
 devtool: 'inline-source-map',

 // Spin up a server for quick development
 devServer: {
  historyApiFallback: true,
  static: path.resolve(__dirname, '../src'),
  open: true,
  compress: true,
  hot: true,
  port: 8080,
 },
 module: {
  rules: [
   // Styles: Inject CSS into the head with source maps
   {
    test: /\.(scss|css)$/,
    use: [
     MiniExtractCSSPlugin.loader,
     {
      loader: 'css-loader',
      options: { sourceMap: true, importLoaders: 1, modules: false },
     },
     { loader: 'postcss-loader', options: { sourceMap: true } },
     { loader: 'sass-loader', options: { sourceMap: true } },
    ],
   },
  ],
 },
 plugins: [
  new HotModuleReplacementPlugin(),
  new MiniExtractCSSPlugin({
   ignoreOrder: true,
  }),
 ],
});
