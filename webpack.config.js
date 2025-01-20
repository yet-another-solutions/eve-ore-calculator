const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	target: "web",
	mode: "production",
	plugins: [
		// new webpack.ProvidePlugin({process: "process/browser.js"}),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		  }),
		new webpack.IgnorePlugin({
			resourceRegExp: /(fs|child_process)/
		})
	]
}
