var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: {
       app: './src/app.js'
	},
	output: {
       filename: 'build/bundle.js',
       sourceMapFilename: 'build/bundle.map'
	},
	devtool: '#source-map',
  
	module: {
		loaders: [
            {
              loader: 'babel-loader',
              exclude: /(node_modules)/,
              query: {
              	  presets: ['react', 'es2015']
              }
            },
            {
              test: /\.scss$/,
              loader: 'style-loader!css-loader!sass-loader'
            }
		]
	}
}