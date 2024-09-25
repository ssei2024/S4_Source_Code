const closeWithGrace = require("close-with-grace");

module.exports = async (port, host) => {
	const fastifyOpts = require("./opts/fastify.js");
	const fastify = require("fastify")(fastifyOpts);

	//plugins
	await require("./plugins/index.js")(fastify);

	//errors
	await require("./Errors/index.js")(fastify);

	//routes
	await require("./routes/index.js")(fastify);

	fastify.listen({ port, host });

	closeWithGrace(async ({ signal, err }) => {
		if (err) console.log("server is closing due to error:", err);
		else console.log("shutting down gracefuly with signal:", signal);
		await fastify.close();
	});
};
