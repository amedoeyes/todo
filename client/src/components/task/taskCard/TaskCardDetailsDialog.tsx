import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";
import { Task } from "../../../types";

type TaskCardDetailsDialogProps = {
	task: Task;
	open: boolean;
	onClose: () => void;
};

export default function TaskCardDetailsDialog(
	props: TaskCardDetailsDialogProps,
) {
	const dueDate = new Date(props.task.dueDate).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const createdDate = new Date(props.task.creationDate).toLocaleDateString(
		"en-US",
		{
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		},
	);

	const dueDateDiff =
		new Date(props.task.dueDate).getTime() - new Date().getTime();
	const dueDateDiffDays = Math.abs(Math.ceil(dueDateDiff / 86400000));

	const dueText = `Due on ${dueDate} (${dueDateDiffDays} ${
		dueDateDiffDays === 1 ? "day" : "days"
	} left)`;
	const lateText = `Late by ${dueDateDiffDays} ${
		dueDateDiffDays === 1 ? "day" : "days"
	} (${dueDate})`;

	const statusDateText = props.task.isLate
		? lateText
		: props.task.status === "pending" && dueText;

	const createdDateText = `Created on ${createdDate}`;

	return (
		<Dialog
			open={props.open}
			onClose={props.onClose}
			PaperProps={{
				sx: {
					minWidth: "10rem",
				},
			}}
		>
			<DialogTitle textAlign="center">{props.task.title}</DialogTitle>
			<DialogContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: ".5rem",
				}}
			>
				<Typography variant="body1">
					{props.task.description}
				</Typography>

				<Box>
					<Typography variant="body2">{statusDateText}</Typography>
					<Typography variant="body2">{createdDateText}</Typography>
				</Box>

				<Button variant="contained" onClick={props.onClose}>
					Close
				</Button>
			</DialogContent>
		</Dialog>
	);
}
