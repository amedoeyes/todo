import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../types";

export const tasksApi = createApi({
	reducerPath: "tasksApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	tagTypes: ["Tasks"],
	endpoints: (builder) => ({
		getTasks: builder.query<Task[], void>({
			query: () => "tasks",
			providesTags: ["Tasks"],
		}),
		getTask: builder.query<Task, string>({
			query: (id) => `tasks/${id}`,
			providesTags: ["Tasks"],
		}),
		createTask: builder.mutation<Task, Task>({
			query: (task) => ({
				url: "tasks",
				method: "POST",
				body: task,
			}),
			invalidatesTags: ["Tasks"],
		}),
		updateTask: builder.mutation<Task, Task>({
			query: (task) => ({
				url: `tasks/${task.id}`,
				method: "PUT",
				body: task,
			}),
			invalidatesTags: ["Tasks"],
		}),
		deleteTask: builder.mutation<Task, string>({
			query: (id) => ({
				url: `tasks/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Tasks"],
		}),
	}),
});

export const {
	useGetTasksQuery,
	useGetTaskQuery,
	useCreateTaskMutation,
	useUpdateTaskMutation,
	useDeleteTaskMutation,
} = tasksApi;
