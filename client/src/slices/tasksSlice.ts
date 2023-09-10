import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types";

type InitialState = {
	tasks: Task[];
	filteredTasks: Task[];
};

const initialState: InitialState = {
	tasks: [],
	filteredTasks: [],
};

const tasksSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		setTasks(state, action) {
			state.tasks = action.payload;
			state.filteredTasks = action.payload;

			return state;
		},
		filterTasksBySearch(state, action) {
			if (action.payload) {
				state.filteredTasks = state.tasks.filter((task) => {
					const title = task.title.toLowerCase();
					const description = task.description.toLowerCase();
					const search = action.payload.toLowerCase();

					if (title.includes(search)) {
						return true;
					}

					if (description.includes(search)) {
						return true;
					}

					return false;
				});
			} else {
				state.filteredTasks = state.tasks;
			}

			return state;
		},
	},
});

export const { setTasks, filterTasksBySearch } = tasksSlice.actions;
export default tasksSlice;
