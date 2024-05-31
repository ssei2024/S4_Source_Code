const arcaptcha = require("arcaptcha-nodejs");

let fastify;
let name = "";
let email = "";
let nationalCode = "";
let studentId = "";
let attendType = "";
let token = "";

module.exports = (fastifyInstance) => {
	fastify = fastifyInstance;
	return async (req, res) => {

		initValuesFromRequest(req);

		if (!name || !email || !nationalCode || !token)
			return res.code(500).send("Empty Necessary Fields!");

		if (nationalCode.length > 10 || studentId.length > 9)
			return res.code(500).send("Wrong Fields!");

		await arcaptcha
			.verify(
				(secret_key = process.env.SECRET_KEY),
				(site_key = process.env.SITE_KEY),
				(challenge_id = token)
			)
			.then((data) => {
				if (data) {
					return addUserToDB(res);
				}
			});
	};
};

function initValuesFromRequest(req) {
	name = req.body?.name;
	email = req.body?.email;
	nationalCode = req.body?.nationalCode;
	studentId = req.body?.studentId;
	attendType = req.body?.attendType;
	token = req.body?.token;
}

async function addUserToDB(res) {
	await fastify.mysql.query(
		getAddUserQuery(),
		[name, email, nationalCode, studentId, attendType],
		(err) => {
			if (err) res.code(500).send(err);
			res.send("user added to database successfuly...");
		}
	);
}

function getAddUserQuery() {
	return "INSERT INTO users (name,email,nationalCode,studentId,attendType) VALUES (?,?,?,?,?)";
}
