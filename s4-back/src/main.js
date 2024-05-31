module.exports = (port, host) => {
	const fastify = require("fastify")({ logger: true });

	require("./plugins/mysql.js")(fastify);
	require("./plugins/multipart.js")(fastify);
	require("./plugins/cors.js")(fastify);
	require("./routes")(fastify);

	fastify.listen({ port, host });
};
