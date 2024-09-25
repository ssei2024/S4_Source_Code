const countUsersHandler = require("../../handlers/users/CountUsers");
const createUserHandler = require("../../handlers/users/CreateUser");
const editUserHandler = require("../../handlers/users/editUserHandler");
const getUserHandler = require("../../handlers/users/getUserHandler");
const getUsersHandler = require("../../handlers/users/getUsersHandler");
const deleteUsersHandler = require("../../handlers/users/deleteUsersHandler");

const createUserSchema = require("../../schemas/users/CreateUser");
const editUserSchema = require("../../schemas/users/CreateUser");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "/",
			handler: createUserHandler(fastify),
			schema: createUserSchema,
		},
		{
			method: "GET",
			url: "/count",
			handler: countUsersHandler(fastify),
		},
		{
			method: "PATCH",
			url: "/",
			handler: editUserHandler(fastify),
			schema: editUserSchema,
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
