// userSchema.test.js
const Fastify = require('fastify');
const userSchema = require('./userSchema');

describe('User Schema Validation', () => {
  let fastify;

  beforeAll(() => {
    // Initialize Fastify
    fastify = Fastify();
    // Register a route with the schema
    fastify.post('/user', { schema: userSchema }, (request, reply) => {
      reply.send({ success: true });
    });
  });

  afterAll(() => {
    fastify.close();
  });

  test('should succeed for valid input', async () => {
    const validData = {
      username: 'johndoe',
      email: 'john@example.com',
      age: 25,
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/user',
      payload: validData,
    });

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual({ success: true });
  });

  test('should fail if required fields are missing', async () => {
    const invalidData = {
      username: 'johndoe',
      email: 'john@example.com',
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/user',
      payload: invalidData,
    });

    expect(response.statusCode).toBe(400); // Bad request
  });

  test('should fail for invalid email format', async () => {
    const invalidData = {
      username: 'johndoe',
      email: 'not-an-email',
      age: 25,
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/user',
      payload: invalidData,
    });

    expect(response.statusCode).toBe(400); // Bad request
  });

  test('should fail for age below minimum', async () => {
    const invalidData = {
      username: 'johndoe',
      email: 'john@example.com',
      age: 17, // Below minimum
    };

    const response = await fastify.inject({
      method: 'POST',
      url: '/user',
      payload: invalidData,
    });

    expect(response.statusCode).toBe(400); // Bad request
  });
});
