const { pipeline } = require("stream");
const { promisify } = require("util");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const asyncPipeline = promisify(pipeline);

const allowedFileTypes = [
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]; // PDF, DOC, DOCX

const maxFileSize = 20 * 1024 * 1024;

function createResume() {
	return async (req, res) => {
		try {
			const file = await req.file();

			if (!file) return res.code(400).send({ message: "No file uploaded" });

			if (!allowedFileTypes.includes(file.mimetype))
				return res.code(400).send({
					message: "Invalid file type",
				});

			if (file.size > maxFileSize)
				return res.code(400).send({ message: "File size exceeds the limit" });

			const filePath = path.join(
				__dirname,
				"../../../resumeFiles/",
				uuidv4() + path.extname(file.filename)
			);

			await asyncPipeline(file.file, fs.createWriteStream(filePath));

			return res.send({ message: "resume saved successfully" });
		} catch (e) {
			console.error("Error while adding new resume:", e);
			return res.code(500).send({ message: "Error while saving resume" });
		}
	};
}

module.exports = { createResume };
