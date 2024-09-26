const opts = require("../opts/bcrypt.js");

module.exports = async (fastify) => {
	await fastify.register(require("fastify-bcrypt"), opts);
};
