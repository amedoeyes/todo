import { Container } from "@mui/material";
import CreateTaskButton from "./components/home/CreateTaskButton";
import Header from "./components/home/Header";
import Tasks from "./components/home/Tasks";

export default function App() {
	return (
		<>
			<Header />
			<Container maxWidth="lg" sx={{ py: "1rem" }}>
				<Tasks />
				<CreateTaskButton />
			</Container>
		</>
	);
}
