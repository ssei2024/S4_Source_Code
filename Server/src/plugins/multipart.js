module.exports = async (fastify) => {
	await fastify.register(require("@fastify/multipart"));
	fastify.after((err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}
	});
};
