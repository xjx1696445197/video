const path = require('path')

module.exports = {
	// 返回一个由当前地址拼接成的绝对地址
	resolve(_path){
		return path.resolve(__dirname, _path)
	},
	// styleLoader配置
	getStyleLoader(){
		return['css-loader?sourceMap', 'postcss-loader?sourceMap']
	},
	// assetsPath 资源路径
	getAssetsPath(argv){
		return argv.mode === 'production' ? './' : '/'
	}
}
