module.exports = (fastify) => {
	return async (req, res) => {
		await addUserToDB(fastify, req.body)
			.then(() => {
				return handleAddUserToDbSuccess(res);
			})
			.catch((err) => {
				return handleAddUserToDbErrors(res, err);
			});
	};
};

async function addUserToDB(
	fastify,
	body
) {
	// return await fastify.mysql.query(getAddUserQuery(), [
	// 	name,
	// 	email,
	// 	nationalCode,
	// 	studentId,
	// 	attendType,
	// ]);

	const { username, password } = body;
	const hashedPassword = await fastify.bcrypt.hash(password);

	await fastify.pg
		.query("INSERT INTO users (username,password) VALUES ($1,$2)", [
			username,
			hashedPassword,
		])
		.then(() => {
			return res.send("signup successfuly");
		})
		.catch((err) => {
			
			return res.code(400).send(err);
		});
}

function handleAddUserToDbSuccess(res) {
	res.send({ message: "user added successfuly ..." });
}
function handleAddUserToDbErrors(res, err) {
	console.log(err);
	res.code(500).send({ message: "operation failed!" });
}

function getAddUserQuery() {
	return `
	INSERT INTO users
	(name,email,nationalCode,studentId,attendType)
		VALUES
	(?,?,?,?,?)`;
}