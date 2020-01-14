const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');



const HtmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'),
	filename: 'index.html',
	minify: {
		// 合并多余的空格
		collapseWhitespace: true,
		// 移除注释
		removeComments: true,
		// 移出属性上的双引号
		removeAttributeQuotes: true
	}
});

// 抽离第三方的库
const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
	name: 'common',
	filename: 'js/common.js'
});

// 压缩JS代码
const UglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false // 移出警告
	}
});

// 定义生成环境,进一步压缩代码
const DefinePlugin = new webpack.DefinePlugin({
	'process.env.NODE_ENV': 'production'
});

module.exports = {
	entry: {
		app: path.join(__dirname, './src/main.js'),
		common: ['jquery'] // 把要抽离的第三方包的名称,放到这个数据中
	},
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'js/[name].js'
	},
	plugins: [
		HtmlPlugin,
		new CleanWebpackPlugin(),
		CommonsChunkPlugin,
		UglifyJsPlugin,
		DefinePlugin,
    new ExtractTextPlugin('css/styles.css'),
    new OptimizeCssAssetsPlugin()
	],
	module: {
		rules: [
			// {
			// 	test: /.css$/,
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: 'css-loader'
			// 	})
			// },
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader'],
					publicPath: '../'
				})
			},
			{
				test: /\.(png|gif|bump|jpg)$/,
				use: ['url-loader?limit=5000&name=images/[hash:8]-[name].[ext]']
			},
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	}
};
