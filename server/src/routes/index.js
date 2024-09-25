module.exports = async (fastify) => {
	await fastify.register(require("./users"), {
		prefix: "/users",
	});

	await fastify.register(require("./resumes"), {
		prefix: "/resumes",
	});

	await fastify.register(require("./auth"), {
		prefix: "/auth",
	});
};
