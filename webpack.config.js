const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		index: path.resolve(__dirname, "src", "index.js")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		sourceMapFilename: "bundle.map"
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		open: "google-chrome"
	},
	module: {
		rule: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ["babel-loader"]
		}]
	},
	plugins: [
	    new HtmlWebpackPlugin({
	    	template: path.resolve(__dirname, "src", "index.html")
	    })
	]
}