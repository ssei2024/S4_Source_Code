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
				res.code(200);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

function getAddUserQuery() {
	return "INSERT INTO users (name,email,nationalCode,studentId,attendType) VALUES (?,?,?,?,?)";
}
