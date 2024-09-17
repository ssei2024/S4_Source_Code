const handlers = require("../../handlers/resumes/CreateResume");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "/resumes",
			handler: handlers.createResume(),
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
