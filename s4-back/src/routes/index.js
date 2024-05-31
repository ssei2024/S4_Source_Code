module.exports = (fastify) => {
	const addNewUser = require("../utils/addNewUserHandler")(fastify);
	const addNewResume = require("../utils/addNewResumeHandler");
	const countUsers = require("../utils/userCountHandler")(fastify);

	fastify.post("/users", addNewUser);
	fastify.post("/resumes", addNewResume);
	fastify.get("/countUsers", countUsers);
};
