const {	override, addWebpackAlias, addWebpackModuleRule } = require("customize-cra");
const path = require("path");

module.exports = override(
	addWebpackAlias({
		["@commonComp"]: path.resolve(__dirname, "src/CommonComponents"),
	}),
	//addWebpackModuleRule({
	//	test: /\.css$/i,
	//	loader: 'css-loader',
	//	options: {
	//		modules: true,
	//	},
	//},)
)