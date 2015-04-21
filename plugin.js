

exports.for = function (API) {

	var exports = {};

	exports.resolve = function (resolver, config, previousResolvedConfig) {
		return resolver({}).then(function (resolvedConfig) {

// TODO: Implement

			resolvedConfig.commit = "commit";

			return resolvedConfig;
		});
	}

	exports.turn = function (resolvedConfig) {

//console.log("TURN VCS INSIGHT", resolvedConfig);

	}

	exports.spin = function (resolvedConfig) {

//console.log("SPIN VCS INSIGHT", resolvedConfig);

	}

	return exports;
}

