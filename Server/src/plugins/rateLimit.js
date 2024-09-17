module.exports = async (fastify) => {
	await fastify.register(require("@fastify/rate-limit"), {
		max: 10,
		timeWindow: "1 minute",
		errorResponseBuilder: () => {
			throw new Error("Too Many Requests!");
		},
	});
};
