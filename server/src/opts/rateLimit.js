module.exports = {
	max: 10,
	timeWindow: "1 minute",
	errorResponseBuilder: () => {
		throw new Error("Too Many Requests!");
	},
};
