// createUserSchema.test.js
const Fastify = require("fastify");

describe("Create User Schema Validation", () => {
	let fastify;

	beforeAll(() => {
		fastify = Fastify();
	});

	afterAll(() => {
		fastify.close();
	});

	test("should succeed for valid input", async () => {
		const validData = {
			name: "johndoe",
			email: "john@example.com",
			nationalCode: 1234567890,
		};

		const response = await fastify.inject({
			method: "POST",
			url: "/users",
			payload: validData,
		});

		expect(response.statusCode).toBe(200);
		expect(JSON.parse(response.payload)).toEqual({ success: true });
	});
});
