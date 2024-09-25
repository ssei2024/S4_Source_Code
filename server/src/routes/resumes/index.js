const createResumeHandler = require("../../handlers/resumes/createResume");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "/",
			handler: createResumeHandler.createResume,
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
