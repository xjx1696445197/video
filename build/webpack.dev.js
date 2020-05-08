const baseConfig = require('./webpack.base')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const {
	getStyleLoader
} = require('./webpack.until')

const config = require('./webpack.config')
console.log(process.env.PROJECT_ENV)

module.exports = (env, argv) => {
	return merge(baseConfig(env, argv), {
		mode: 'development',
		devtool: 'cheap-module-eval-source-map',
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader'].concat(getStyleLoader()),
					exclude: /mand-mobile/
				},
				{
					test: /mand-mobile.*\.css$/,
					use: ['style-loader'].concat([
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true,
								plugins: [
									require('postcss-pxtorem')({
										rootValue: 100,
										propWhiteList: []
									})
								]
							}
						}
					])
				}
			]
		},
		devServer: config.dev.devServer,
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	})
}
