module.exports = async (fastify) => {
	await fastify.register(require("@fastify/multipart"));
};
