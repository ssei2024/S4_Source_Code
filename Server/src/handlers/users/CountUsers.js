let virtual = 0;
let both = 0;
let onSite = 0;

module.exports = (fastify) => {
	return async (req, res) => {
		await fastify.mysql
			.query(getQueryString())
			.then((data) => {
				return handleUserCountSuccess(res, data);
			})
			.catch((e) => {
				return handleUserCountErrors(res, e);
			});
	};
};

function getQueryString() {
	return "(SELECT COUNT(*) FROM users WHERE attendtype='virtual') UNION (SELECT COUNT(*) FROM users WHERE attendtype='both') UNION (SELECT COUNT(*) FROM users WHERE attendtype='onSite')";
}

function handleUserCountSuccess(res, data) {
	updateCounterVars(data[0]);
	console.info({ "virtual & onSite": both, onSite, virtual });
	res.send({ "virtual & onSite": both, onSite, virtual });
}

function updateCounterVars(dataArray) {
	virtual = dataArray[0]["COUNT(*)"];
	both = dataArray[1]["COUNT(*)"];
	onSite = dataArray[2]["COUNT(*)"];
}

function handleUserCountErrors(res, e) {
	console.error("Error while fetching data from database:", e);
	res.code(500).send("Error while fetching data from database!");
}
