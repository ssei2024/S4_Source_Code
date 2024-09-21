module.exports = (fastify) => {
	return async (req, res) => {
		const {
			name,
			email,
			nationalCode,
			studentId = "",
			attendType = "",
		} = req.body;

		await fastify.mysql
			.query(getAddUserQuery(), [
				name,
				email,
				nationalCode,
				studentId,
				attendType,
			])
			.then(() => {
				return res.code(200).send({ message: "user added successfuly ..." });
			})
			.catch((err) => {
				console.log(err);
				return res.code(500).send({ message: "operation failed!" });
			});
	};
};

function getAddUserQuery() {
	return "INSERT INTO users (name,email,nationalCode,studentId,attendType) VALUES (?,?,?,?,?)";
}
