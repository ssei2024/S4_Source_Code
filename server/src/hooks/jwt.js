module.exports = (fastify) => {
	fastify.addHook("onRequest", async (req, res) => {
		if (req.url != "/login" && req.url != "/signup") {
			await req
				.jwtVerify()
				.then((data) => {
					req.userData = data;
				})
				.catch(() => {
					return res.code(401).send({ message: "Unauthorized" });
				});
		}
	});
};
