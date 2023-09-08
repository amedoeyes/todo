import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetTasksQuery } from "./services/tasksApi";
import { addTasks } from "./slices/tasksSlice";
import { AppDispatch } from "./store";

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
	const { data, isLoading, isError } = useGetTasksQuery();
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (data) dispatch(addTasks(data));
	}, [data, dispatch]);

	if (isLoading) {
		return <>Loading...</>;
	}

	if (isError) {
		return <>Error</>;
	}

	return <>{props.children}</>;
}
