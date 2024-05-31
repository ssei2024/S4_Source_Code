const fs = require("fs");
const util = require("util");
const pipeline = util.promisify(require("stream").pipeline);

module.exports = async (req, res) => {
	try {
		const file = await req.file();
		if (file) {
			await pipeline(
				file.file,
				fs.createWriteStream("./resumes/" + file.filename)
			);
		}
	} catch (e) {
		console.error("Error while adding new resume:", e);
	}
};
