module.exports = async (fastify) => {
	await fastify.register(require("@fastify/multipart"));
	fastify.after((err) => {
		if (err) {
			console.log(err);
		}
		console.log("multipart initiated ...");
	});
};
