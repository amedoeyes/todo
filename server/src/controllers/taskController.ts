import { Request, Response } from "express";
import Task from "../models/Task";

async function getAllTasks(_: Request, res: Response) {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function getTask(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const task = await Task.findById(id);

		if (!task) {
			res.status(404).json({ message: "Task not found" });
			return;
		}

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function createTask(req: Request, res: Response) {
	try {
		const task = new Task(req.body);
		await task.save();
		res.status(201).json(task);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function updateTask(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndUpdate(id, req.body, { new: true });

		if (!task) {
			res.status(404).json({ message: "Task not found" });
			return;
		}

		res.status(200).json(task);
	} catch (error) {
		res.status(500).json(error);
	}
}

async function deleteTask(req: Request, res: Response) {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndDelete(id);

		if (!task) {
			res.status(404).json({ message: "Task not found" });
			return;
		}

		res.status(204).end();
	} catch (error) {
		res.status(500).json(error);
	}
}

export default {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
};
