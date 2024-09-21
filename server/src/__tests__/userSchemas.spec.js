// createUserSchema.test.js
const Fastify = require("fastify");
const createUserSchema = require("../schemas/users/CreateUser");

describe("Create User Schema Validation", () => {
	let fastify;

	beforeAll(() => {
		fastify = Fastify();
		fastify.post("/users", { schema: createUserSchema }, (request, reply) => {
			reply.send({ success: true });
		});
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

	test("should fail if required fields are missing", async () => {
		const invalidData = {
			name: "johndoe",
			email: "john@example.com",
		};

		const response = await fastify.inject({
			method: "POST",
			url: "/users",
			payload: invalidData,
		});

		expect(response.statusCode).toBe(400);
	});

	test("should fail for invalid email format", async () => {
		const invalidData = {
			name: "johndoe",
			email: "not-an-email",
			nationalCode: 1234567890,
		};

		const response = await fastify.inject({
			method: "POST",
			url: "/users",
			payload: invalidData,
		});

		expect(response.statusCode).toBe(400);
	});

	test("should fail for invalid nationalCode", async () => {
		const invalidData = {
			username: "johndoe",
			email: "john@example.com",
			nationalCode: 12345,
		};

		const response = await fastify.inject({
			method: "POST",
			url: "/users",
			payload: invalidData,
		});

		expect(response.statusCode).toBe(400);
	});

	test("should fail for invalid nationalCode", async () => {
		const invalidData = {
			username: "johndoe",
			email: "john@example.com",
			nationalCode: 12345,
		};

		const response = await fastify.inject({
			method: "POST",
			url: "/users",
			payload: invalidData,
		});

		expect(response.statusCode).toBe(400);
	});
});
