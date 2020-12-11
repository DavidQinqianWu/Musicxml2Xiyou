/* eslint-disable @typescript-eslint/no-require-imports */
const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: {
		musicxml2Xiyou: path.resolve(__dirname, "../src/Index.ts"),
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../dist"),
		libraryTarget: "commonjs",
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
				include: path.resolve(__dirname, "../src"),
			},
		],
	},
};
