import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

async function connect() {
	try {
		if (MONGODB_URI) {
			console.log("Connecting to MongoDB...");
			await mongoose.connect(MONGODB_URI);
			console.log("Connected to MongoDB");
		} else {
			console.error("MONGODB_URI is not defined");
		}
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error}`);
	}
}

export default {
	connect,
};
