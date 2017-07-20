'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/main',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	]
};
