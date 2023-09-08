import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types";

const initialState: Task[] = [];

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTasks: (state, action) => {
			state = action.payload;
			return state;
		},
		addTask: (state, action) => {
			state.push(action.payload);
			return state;
		},
		updateTask: (state, action) => {
			return state.map((task) => {
				if (task.id === action.payload.id) return action.payload;

				return task;
			});
		},
		removeTask: (state, action) => {
			return state.filter((task) => task.id !== action.payload);
		},
	},
});

export const { addTasks, addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
