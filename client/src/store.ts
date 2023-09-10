import { configureStore } from "@reduxjs/toolkit";
import { tasksApi } from "./services/tasksApi";
import filterdTasksSlice from "./slices/tasksSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
	reducer: {
		tasks: filterdTasksSlice.reducer,

		[tasksApi.reducerPath]: tasksApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tasksApi.middleware),
});

export default store;
