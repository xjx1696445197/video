const path = require('path')
const { resolve } = require('./webpack.until')

// 项目路径
const projectPath = resolve('../')

// 打包后的地址
const buildPath = resolve(`${projectPath}/dist`)

// 没打包时的路径
const devPath = resolve(`${projectPath}/src`)

let config = {
	projectPath,
	buildPath,
	devPath,
	dev: {
		devServer: {
			host: 'localhost',
			port: 3001,
			compress: true,
			hot: true,
			overlay: {
				warnings: false,
			    errors:true
			},
			proxy: {}
		}
	},
	build: {
		productionSourceMap: false
	}
}


module.exports = config
