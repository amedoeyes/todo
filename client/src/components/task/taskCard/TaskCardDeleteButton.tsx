import { Delete } from "@mui/icons-material";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useDeleteTaskMutation } from "../../../services/tasksApi";

type TasCardDeleteButtonProps = {
	id: string;
};

export default function TasCardDeleteButton(props: TasCardDeleteButtonProps) {
	const [deleteTask, { isLoading }] = useDeleteTaskMutation();
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleDelete = async () => {
		await deleteTask(props.id);
		setOpen(false);
	};

	return (
		<>
			<IconButton onClick={handleOpen} aria-label="delete">
				<Delete />
			</IconButton>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle align="center">Delete Task</DialogTitle>

				<DialogContent>
					<Typography variant="body1">
						Are you sure you want to delete this task?
					</Typography>
				</DialogContent>

				<DialogActions>
					<Button variant="outlined" fullWidth onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="contained"
						fullWidth
						onClick={handleDelete}
						disabled={isLoading}
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
