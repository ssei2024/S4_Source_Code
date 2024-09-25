module.exports = (fastify) => {
	return async (req, res) => {
		await getUsersCountFromDB(fastify)
			.then((data) => {
				return handleUserCountSuccess(res, data[0]);
			})
			.catch((e) => {
				return handleUserCountErrors(res, e);
			});
	};
};

async function getUsersCountFromDB(fastify) {
	return await fastify.mysql.query(getQueryString());
}

function getQueryString() {
	return `
	(SELECT COUNT(*) FROM users WHERE attendtype='both')
		UNION
	(SELECT COUNT(*) FROM users WHERE attendtype='onSite')
		UNION
	(SELECT COUNT(*) FROM users WHERE attendtype='virtual')`;
}

function handleUserCountSuccess(res, data) {
	res.send({
		"virtual & onSite": data[0]["COUNT(*)"],
		onSite: data[1]["COUNT(*)"],
		virtual: data[2]["COUNT(*)"],
	});
}

function handleUserCountErrors(res, e) {
	console.error("Error while fetching data from database:", e);
	res.code(500).send("Error while fetching data from database!");
}
