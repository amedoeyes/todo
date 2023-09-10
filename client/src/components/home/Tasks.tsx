import { Skeleton, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetTasksQuery } from "../../services/tasksApi";
import { setTasks } from "../../slices/tasksSlice";
import { AppDispatch, RootState } from "../../store";
import TaskCard from "../task/taskCard/TaskCard";

export default function Tasks() {
	const { data, isLoading, isError } = useGetTasksQuery();
	const filteredTasks = useSelector((state: RootState) => state.tasks);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (data) dispatch(setTasks(data));
	}, [data, dispatch]);

	if (isLoading) {
		return (
			<Stack
				spacing={1}
				m="auto"
				sx={{
					maxWidth: "50rem",
				}}
			>
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
				<Skeleton variant="rectangular" width="100%" height="5rem" />
			</Stack>
		);
	}

	if (isError) return <></>;

	return (
		<Stack
			spacing={1}
			m="auto"
			sx={{
				maxWidth: "50rem",
			}}
		>
			{filteredTasks.filteredTasks.map((task) => (
				<TaskCard {...task} />
			))}
		</Stack>
	);
}
