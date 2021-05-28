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
		open: "Google Chrome"
	}
}