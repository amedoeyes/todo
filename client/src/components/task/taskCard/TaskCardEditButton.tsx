import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useUpdateTaskMutation } from "../../../services/tasksApi";
import { Task, TaskFormValues } from "../../../types";
import TaskFormDialog from "../taskForm/TaskFormDialog";

export default function TaskCardEditButton(props: Task) {
	const [open, setOpen] = useState(false);
	const [updateTask, { isLoading }] = useUpdateTaskMutation();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSubmit = async (values: TaskFormValues) => {
		const updatedTask: Task = {
			...props,
			...values,
		};

		await updateTask(updatedTask);
		handleClose();
	};

	return (
		<>
			<IconButton onClick={handleOpen} aria-label="edit">
				<Edit />
			</IconButton>

			<TaskFormDialog
				open={open}
				title="Edit Task"
				values={props}
				isLoading={isLoading}
				submitButtonText="Update"
				onClose={handleClose}
				onSubmit={handleSubmit}
			/>
		</>
	);
}
