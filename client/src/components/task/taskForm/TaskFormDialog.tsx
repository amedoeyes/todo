import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { TaskFormValues } from "../../../types";
import TaskForm from "./TaskForm";

type TaskFormDialogprops = {
	open: boolean;
	title?: string;
	values?: TaskFormValues;
	isLoading?: boolean;
	submitButtonText?: string;
	onClose: () => void;
	onSubmit: (values: TaskFormValues) => void;
};

export default function TaskFormDialog(props: TaskFormDialogprops) {
	return (
		<Dialog
			open={props.open}
			onClose={props.onClose}
			fullWidth
			PaperProps={{
				sx: {
					maxWidth: "30rem",
				},
			}}
		>
			<DialogTitle textAlign="center">
				{props.title || "Task Form"}
			</DialogTitle>

			<DialogContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: ".5rem",
				}}
			>
				<TaskForm {...props} />

				<Button variant="outlined" onClick={props.onClose}>
					Close
				</Button>
			</DialogContent>
		</Dialog>
	);
}
