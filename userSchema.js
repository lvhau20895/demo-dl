const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema(
	{
		_id: {
			type: String,
			require: true
		},
		username: {
			type: String,
			require: true,
			unique: true,
			minLength: [5, "Username length 5 - 10"],
			maxLength: [10, "Username length 5 - 10"]
		},
		email: {
			type: String,
			require: true,
			unique: true,
			match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/, "Invalid email"]
		},
		password: {
			type: String,
			require: true
		},
		role: {
			type: String,
			enum: ["admin", "guest"],
			default: "guest"
		},
		profile: {}
	},
	{
		timestamps: true
	}
);

const User = model("User", UserSchema);
module.exports = { User, UserSchema };
