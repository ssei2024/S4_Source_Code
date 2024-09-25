const createResumeHandler = require("../../handlers/resumes/createResume");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "/",
			handler: createResumeHandler,
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
