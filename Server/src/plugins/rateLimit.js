module.exports = async (fastify) => {
	await fastify.register(require("@fastify/rate-limit"), {
		max: process.env.RATE_LIMIT_MAX,
		timeWindow: process.env.RATE_LIMIT_TIME_WINDOW,
	});
	fastify.after((err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}
		console.log("rate-limit activated ...");
	});
};
