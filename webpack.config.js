const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./public/index.html",
	filename: "./index.html",
	favicon: "./public/favicon.ico"
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, "/dist"),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './dist',
		hot: true,
		port: 3000
	},
	plugins: [htmlPlugin]
};