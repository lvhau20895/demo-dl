const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://admin:admin@handbook.eydlcri.mongodb.net/handbook?retryWrites=true&w=majority"
		);
		console.log("connect database success!");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDatabase;
