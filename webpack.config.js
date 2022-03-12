const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: ["@babel/polyfill", './src/index.jsx'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		publicPath: '/'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		port: 3000,
		open: true
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules',
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					 presets: ['@babel/preset-env']
				  }
				}
			 },
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
				  loader: "babel-loader",
				  options: {
					 presets: ["@babel/preset-react"]
				  }
				}
			 }
		]
	}
}
