module.exports = async (fastify) => {
	await fastify.register(require("@fastify/mysql"), {
		connectionString: process.env.MYSQL_URL,
		promise: true,
	});
	fastify.after((err) => {
		if (err) {
			console.log(err);
			process.exit(0);
		}
	});
};
