const countUsersHandler = require("../../handlers/users/countUsers");
const updateUserHandler = require("../../handlers/users/updateUser");
const getUserHandler = require("../../handlers/users/getUser");
const getUsersHandler = require("../../handlers/users/getUsers");
const deleteUsersHandler = require("../../handlers/users/deleteUsers");

const updateUserSchema = require("../../schemas/users/UpdateUser");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "GET",
			url: "/count",
			handler: countUsersHandler(fastify),
		},
		{
			method: "PUT",
			url: "/",
			handler: updateUserHandler(fastify),
			schema: updateUserSchema,
		},
		{
			method: "GET",
			url: "/:id",
			handler: getUserHandler(fastify),
		},
		{
			method: "GET",
			url: "/",
			handler: getUsersHandler(fastify),
		},
		{
			method: "DELETE",
			url: "/",
			handler: deleteUsersHandler(fastify),
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
