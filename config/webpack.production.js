const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
 module: {
  rules: [
   {
    test: /\.(scss|css)$/,
    use: [
     MiniCssExtractPlugin.loader,
     {
      loader: 'css-loader',
      options: {
       importLoaders: 2,
       sourceMap: false,
       modules: false,
      },
     },
     'postcss-loader',
     'sass-loader',
    ],
   },
   {
    test: /\.(gif|png|jpe?g|svg)$/i,
    exclude: /fonts/,
    use: [
     {
      loader: 'file-loader',
      options: {
       name: '[path][name].[ext]',
       // publicPath: '..' // use relative path
      },
     },
     {
      loader: 'image-webpack-loader',
      options: {
       mozjpeg: {
        progressive: true,
        quality: 65,
       },
       optipng: {
        enabled: false,
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
  ],
 },
 devtool: false,

 plugins: [
  new SubresourceIntegrityPlugin({
   hashFuncNames: ['sha384'],
   enabled: true,
  }),
  new MiniExtractCSSPlugin({
   ignoreOrder: true,
  }),
 ],
});
