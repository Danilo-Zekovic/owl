/*
* Danilo Zekovic
* Webpack configuration
* Libraries, loaders, plugins, dependencies used in this Webpack:
* 1. html-webpack-plugin to imbed bundel into the index.html and place it in public
* 1a. https://www.npmjs.com/package/html-webpack-plugin
* 2. url-loader to load static/local images in png and jpg format
* 2a. https://www.npmjs.com/package/url-loader
* 2b. Second answer: https://stackoverflow.com/questions/34582405/react-wont-load-local-images
* 3. babel-loader to load jsx
* 3a. https://www.npmjs.com/package/babel-loader
* 3b. https://github.com/babel/babel-loader
*/

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject:'body'
})

const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'app');
const DIST_DIR = path.resolve(__dirname, 'public');

const config = {
  entry: path.resolve(SRC_DIR, 'index.js'),

  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
  },
  plugins:[HtmlWebpackPluginConfig]
};

module.exports = config;
