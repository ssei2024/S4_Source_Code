const fs = require("fs");
const util = require("util");
const pipeline = util.promisify(require("stream").pipeline);
const { v4: uuidv4 } = require("uuid");

function createResume() {
	return async (req, res) => {
		try {
			const file = await req.file();
			if (file) {
				await pipeline(
					file.file,
					fs.createWriteStream("./resumeFiles/" + uuidv4() + file.filename)
				);
			}
		} catch (e) {
			console.error("Error while adding new resume:", e);
		}
	};
}

module.exports = { createResume };
