module.exports = async (app, fastify) => {
	await fastify.setErrorHandler(function (error, req, res) {
		if (error.code === "FST_ERR_VALIDATION")
			res.code(400).send({ error: "Invalid Inputs!" });
		else if (error.message === "Too Many Requests!")
			res.code(429).send({ error: "Rate limit exceeded!" });
	});
};
