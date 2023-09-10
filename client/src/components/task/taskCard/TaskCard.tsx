import {
	Box,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Task } from "../../../types";
import TaskCardCheckBox from "./TaskCardCheckBox";
import TaskCardDeleteButton from "./TaskCardDeleteButton";
import TaskCardDetailsDialog from "./TaskCardDetailsDialog";
import TaskCardEditButton from "./TaskCardEditButton";

export default function TaskCard(props: Task) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dueDateDiff =
		new Date(props.dueDate).getTime() - new Date().getTime();
	const dueDateDiffDays = Math.abs(Math.ceil(dueDateDiff / 86400000));

	const dueText = `Due in ${dueDateDiffDays} ${
		dueDateDiffDays === 1 ? "day" : "days"
	}`;
	const lateText = `Late by ${dueDateDiffDays} ${
		dueDateDiffDays === 1 ? "day" : "days"
	}`;

	const statusDateText = props.isLate
		? lateText
		: props.status === "pending" && dueText;

	return (
		<>
			<Card
				variant="outlined"
				sx={{
					width: "100%",
					height: "5rem",
					display: "flex",
					alignItems: "center",
					opacity:
						props.status === "done" ? 0.5 : props.isLate ? 0.7 : 1,
				}}
			>
				<CardActions>
					<TaskCardCheckBox {...props} />
				</CardActions>

				<CardActionArea
					onClick={handleOpen}
					sx={{
						height: "100%",
					}}
				>
					<CardContent
						sx={{
							p: 0,
							px: "1rem",
							display: "flex",
						}}
					>
						<Box width="1rem" flex={1}>
							<Typography
								variant="h6"
								noWrap
								textOverflow="ellipsis"
								overflow="hidden"
							>
								{props.title}
							</Typography>
							<Typography
								variant="body1"
								noWrap
								textOverflow="ellipsis"
								overflow="hidden"
							>
								{statusDateText}
							</Typography>
						</Box>
					</CardContent>
				</CardActionArea>

				<CardActions>
					<TaskCardEditButton {...props} />
					<TaskCardDeleteButton {...props} />
				</CardActions>
			</Card>

			<TaskCardDetailsDialog
				task={props}
				open={open}
				onClose={handleClose}
			/>
		</>
	);
}
