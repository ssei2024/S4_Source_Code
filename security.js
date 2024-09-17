

//==========================================================================================

const validApiKey = "your-secret-api-key";

fastify.addHook("onRequest", (request, reply, done) => {
	const apiKey = request.headers["x-api-key"];

	if (apiKey !== validApiKey) {
		reply.status(403).send({ error: "Forbidden: Invalid API key" });
	} else {
		done();
	}
});

//==========================================================================================

fastify.register(cors, {
	origin: ["https://your-frontend.com"], // Allow only specific origin
	methods: ["GET", "POST"], // Limit methods
});
