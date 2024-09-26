module.exports = {
	logger: {
		transport: {
			target: "pino-pretty",
			options: {
				colorize: true,
				translateTime: true,
				singleLine: true,
			},
		},
	},
};
