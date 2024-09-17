module.exports = async (fastify) => {
	await fastify.register(require("@fastify/rate-limit"), {
		max: 10,
		timeWindow: "1 minute",
	});
	fastify.after((err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}
		console.log("rate-limit activated ...");
	});
};
