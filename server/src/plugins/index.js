module.exports = async (fastify) => {
	await require("./mysql.js")(fastify);
	await require("./rateLimit.js")(fastify);
	await require("./cors.js")(fastify);
	await require("./jwt.js")(fastify);
	await require("./bcrypt.js")(fastify);
	await require("./multipart.js")(fastify);
};
