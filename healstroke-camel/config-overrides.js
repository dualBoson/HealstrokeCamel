const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);

module.exports = function(config, env) {
	config.resolve.alias = Object.assign(config.resolve.alias, {
		"@commonComp": resolve("src/CommonComponents")
	});

	return config;
};