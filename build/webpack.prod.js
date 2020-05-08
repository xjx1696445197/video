const baseConfig = require('./webpack.base')
const config = require('./webpack.config')
const {
	getStyleLoader
} = require('./webpack.until')

const merge = require('webpack-merge')
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (env, argv) => {
	return merge(baseConfig(env, argv), {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ExtractTextWebpackPlugin.extract({
						fallback: 'style-loader',
						use: getStyleLoader(),
						publicPath: '../'
					}),
					exclude: /mand-mobile/
				},
				{
					test: /mand-mobile.*\.css$/,
					use: ExtractTextWebpackPlugin.extract({
						fallback: 'style-loader',
						use: [
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
						],
						publicPath: '../'
					})
				}
			]
		},
		plugins: [
			// 清除dist文件夹
			new CleanWebpackPlugin(),
			// 生成css
			new ExtractTextWebpackPlugin({
				filename: `css/[name].[md5:contenthash:hex:8].css`,
			}),
			// 合并压缩css
			new OptimizeCssAssetsWebpackPlugin({
				cssProcessorOptions: {
					map: config.build.productionSourceMap ? {
						inline: false,
						annotation: true
					} : undefined,
					autoprefixer: {
						disable: true
					},
					cssProcessor: require('cssnano'),
					cssProcessorOptions: {
						safe: true,
						discardComments: {
							removeAll: true
						}
					},
					canPrint: true
				}
			})
		],
		optimization: {
			runtimeChunk: {
				name: 'manifest',
			},
			splitChunks: {
				// 超过20k才会被打包
				minSize: 20000,
				cacheGroups: {
					vendor: {
						name: "vendor",
						test: /node_modules/,
						chunks: "all",
						minChunks: 1
					},
					commons: {
						name: "commons",
						chunks: "all",
						minChunks: 2
					}
				}
			}
		}
	})
}
