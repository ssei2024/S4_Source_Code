module.exports = async (port, host) => {
	const app = require("fastify");
	const fastify = app({ logger: true });

	await require("./plugins/mysql.js")(fastify);
	await require("./plugins/multipart.js")(fastify);
	await require("./plugins/cors.js")(fastify);
	await require("./plugins/rateLimit.js")(fastify);

	await require("./Errors/schemaError.js")(app, fastify);

	await fastify.register(require("./routes/users"));

	fastify.listen({ port, host });
};
