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
	{ name, email, nationalCode, studentId = "", attendType = "" }
) {
	return await fastify.mysql.query(getAddUserQuery(), [
		name,
		email,
		nationalCode,
		studentId,
		attendType,
	]);
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
