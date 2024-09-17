module.exports = (port, host) => {
	const fastify = require("fastify")({ logger: true });

	require("./plugins/mysql.js")(fastify);
	require("./plugins/multipart.js")(fastify);
	require("./plugins/cors.js")(fastify);
	fastify.register(require("./routes/users/index.js"));

	fastify.listen({ port, host });
};
