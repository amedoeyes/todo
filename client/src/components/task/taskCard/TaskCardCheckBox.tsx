import { Checkbox } from "@mui/material";
import { useUpdateTaskMutation } from "../../../services/tasksApi";
import { Task } from "../../../types";

export default function TaskCardCheckBox(props: Task) {
	const [updateTask] = useUpdateTaskMutation();

	const handleClick = () => {
		const updatedTask: Task = {
			...props,
			status: props.status === "done" ? "pending" : "done",
		};

		updateTask(updatedTask);
	};

	return <Checkbox checked={props.status === "done"} onClick={handleClick} />;
}
