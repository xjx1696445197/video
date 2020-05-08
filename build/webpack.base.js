const {
	resolve,
	getAssetsPath
} = require('./webpack.until')

const config = require('./webpack.config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, argv) => {
	return {
		entry: {
			app: resolve(`${config.devPath}/index.js`)
		},
		output: {
			filename: 'js/[name]-[hash:8].js',
			path: config.buildPath,
			publicPath: getAssetsPath(argv)
		},
		resolve: {
			extensions: ['.js', '.vue', '.json'],
		    alias: {
		      	'@': config.devPath,
		      	'static': resolve(`${config.devPath}/static`),
		      	'components': resolve(`${config.devPath}/components`),
				'plugins': resolve(`${config.devPath}/plugins`),
		      	'pages': resolve(`${config.devPath}/pages`),
		      	'css': resolve(`${config.devPath}/static/css`),
		      	'images': resolve(`${config.devPath}/static/images`)
		    }
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: [{
						loader: 'vue-loader',
						options: {}
					}]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader'
					}]
				},
				{
					test: /\.(gif|jpg|jpeg|png|svg)$/,
					exclude: /node_modules/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 8 * 1024,
							name: `images/[name]-[hash:7].[ext]`
						}
					}]
				},
				{
					test: /\.(woff|svg|eot|ttf)\??.*$/,
					exclude: /node_modules/,
					use: {
						loader: 'url-loader',
						options: {
							name: `fonts/[name].[hash:7].[ext]`,
							limit: 8192
						}
					}
				}
			]
		},
		plugins: [
			new VueLoaderPlugin(),
			new webpack.DefinePlugin({
				'PROJECT_ENV': JSON.stringify(process.env.PROJECT_ENV),
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
			}),
			new HtmlWebpackPlugin({
				template: resolve(`${config.projectPath}/index.html`),
				filename: 'index.html',
				inject: true,
				favicon: '',
				minify: argv.mode !== 'production' ? undefined : {
	              	removeComments: true,
	              	collapseWhitespace: true,
	              	removeAttributeQuotes: true,
	              	minifyCSS: true,
	              	minifyJS: true
	           }
			})
		]
	}
}
