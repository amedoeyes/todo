import mongoose from "mongoose";

export interface ITask {
	title: string;
	description: string;
	dueDate: Date;
	creationDate: Date;
	status: "pending" | "done";
	isLate: boolean;
}

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	dueDate: {
		type: Date,
		required: true,
	},
	creationDate: {
		type: Date,
		default: Date.now(),
	},
	status: {
		type: String,
		enum: ["pending", "done"],
		default: "pending",
	},
});

taskSchema.virtual("isLate").get(function () {
	return this.status === "pending" && this.dueDate < new Date();
});

taskSchema.set("toJSON", {
	virtuals: true,
	versionKey: false,
	transform: function (_, ret) {
		delete ret._id;
	},
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
