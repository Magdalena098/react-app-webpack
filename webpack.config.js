var webpack = require('webpack')
var path = require('path')

module.exports = {

	entry: {
       app: './src/app.js'
	},
	output: {
       filename: 'build/bundle.js',
       sourceMapFilename: 'build/bundle.map'
	},
	devtool: '#source-map',

  plugins:[
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  
	module: {
		loaders: [
            {
              loader: 'babel-loader',
              exclude: /(node_modules)/,
              query: {
              	  presets: ['react', 'es2015']
              }
            }
		]
	}
}