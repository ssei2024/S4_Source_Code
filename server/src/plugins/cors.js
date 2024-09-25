const opts = require("../opts/cors.js");

module.exports = async (fastify) => {
	await fastify.register(require("@fastify/cors"), opts);
};
