const opts = require("../opts/mysql.js");

module.exports = async (fastify) => {
	await fastify.register(require("@fastify/mysql"), opts);
};
