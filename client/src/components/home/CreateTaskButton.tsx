import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";
import { useCreateTaskMutation } from "../../services/tasksApi";
import { TaskFormValues } from "../../types";
import TaskFormDialog from "../task/taskForm/TaskFormDialog";

export default function CreateTaskButton() {
	const [open, setOpen] = useState(false);
	const [createTask, { isLoading }] = useCreateTaskMutation();

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSubmit = async (values: TaskFormValues) => {
		const newTask = {
			...values,
			creationDate: new Date(),
		};

		await createTask(newTask);
		setOpen(false);
	};

	return (
		<>
			<Fab
				color="primary"
				onClick={handleOpen}
				sx={{
					position: "fixed",
					bottom: "2rem",
					right: "2rem",
					padding: "2rem",
				}}
				aria-label="add"
			>
				<Add />
			</Fab>

			<TaskFormDialog
				open={open}
				title="Create Task"
				isLoading={isLoading}
				submitButtonText="Create"
				onClose={handleClose}
				onSubmit={handleSubmit}
			/>
		</>
	);
}
