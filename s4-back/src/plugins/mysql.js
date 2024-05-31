module.exports = (fastify) => {
	fastify.register(require("@fastify/mysql"), {
		connectionString: process.env.MYSQL_URL,
		promise: true,
	});
};
