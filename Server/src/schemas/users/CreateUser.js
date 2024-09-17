module.exports = {
	body: {
		type: "object",
		required: ["name", "email", "nationalCode"],
		properties: {
			name: {
				type: "string",
				minLength: 1,
				maxLength: 200,
			},
			email: {
				type: "string",
				format: "email",
				maxLength: 1000,
			},
			nationalCode: {
				type: "string",
				minLength: 10,
				maxLength: 10,
			},
			studentId: {
				type: "string",
				pattern: "^[0-9]{8,9}$",
				nullable: true,
			},
			attendType: {
				type: "string",
				enum: ["virtual", "onSite", "both"],
				nullable: true,
			},
		},
		additionalProperties: false,
	},
};
