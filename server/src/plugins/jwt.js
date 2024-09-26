const opts = require("../opts/jwt.js");

module.exports = async (fastify) => {
	await fastify.register(require("@fastify/jwt"), opts);
};
