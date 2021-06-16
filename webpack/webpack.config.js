const modoDev=process.env.NODE_ENV != 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require ('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port: 9000

  },
  optimization : {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader', //adicina o CSS a DOM injetando a tag <style>
        'css-loader', //interpreta @import, url()...
        'sass-loader',
      ]
    }, {
      test:/\.(png| svg | jpg | gif)$/,
      use: [ 'file-loader']
    }]
  }
}