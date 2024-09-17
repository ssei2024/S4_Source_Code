module.exports = async (fastify) => {
	await fastify.register(require("@fastify/cors"), {
		origin: "*",
		methods: ["GET", "POST"],
	});
	fastify.after((err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}
		console.log("cors policy initiated ...");
	});
};
