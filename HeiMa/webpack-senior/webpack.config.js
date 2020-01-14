const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
	template: path.join(__dirname, './src/index.html'),
	filename: 'index.html'
});

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'main.js'
	},
	plugins: [htmlPlugin],
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.(png|gif|bump|jpg)$/, use: ['url-loader?limit=5000'] },
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
		]
	}
};
