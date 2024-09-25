const countUsersHandler = require("../../handlers/users/CountUsers");
const createUserHandler = require("../../handlers/users/CreateUser");

const createUserSchema = require("../../schemas/users/CreateUser");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "",
			handler: createUserHandler(fastify),
			schema: createUserSchema,
		},
		{
			method: "GET",
			url: "/count",
			handler: countUsersHandler(fastify),
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
