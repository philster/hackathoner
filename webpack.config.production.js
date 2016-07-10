var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
    ],
  }
};
