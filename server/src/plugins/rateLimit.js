const opts = require("../opts/rateLimit.js");

module.exports = async (fastify) => {
	await fastify.register(require("@fastify/rate-limit"), opts);
};
