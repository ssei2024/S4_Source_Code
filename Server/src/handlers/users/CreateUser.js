const arcaptcha = require("arcaptcha-nodejs");

let fastify;
let name = "";
let email = "";
let nationalCode = "";
let studentId = "";
let attendType = "";

module.exports = (fastifyInstance) => {
	fastify = fastifyInstance;
	return async (req, res) => {
		initValuesFromRequest(req);

		if (!name || !email || !nationalCode)
			return res.code(400).send("Empty Necessary Fields!");

		if (nationalCode.length > 10 || studentId.length > 9)
			return res.code(400).send("Wrong Fields!");

		return addUserToDB(res);
	};
};

function initValuesFromRequest(req) {
	name = req.body?.name;
	email = req.body?.email;
	nationalCode = req.body?.nationalCode;
	studentId = req.body?.studentId;
	attendType = req.body?.attendType;
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
