const login = require("../../handlers/auth/login");
const signup = require("../../handlers/auth/signup");

const loginSchema = require("../../schemas/auth/Login");
const signupSchema = require("../../schemas/auth/Signup");

module.exports = (fastify, opts, done) => {
	const routes = [
		{
			method: "POST",
			url: "/login",
			handler: login(fastify),
			schema: loginSchema,
		},
		{
			method: "POST",
			url: "/signup",
			handler: signup(fastify),
			schema: signupSchema,
		},
	];

	routes.forEach((route) => {
		fastify.route(route);
	});

	done();
};
