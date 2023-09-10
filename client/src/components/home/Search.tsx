import { SearchRounded } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterTasksBySearch } from "../../slices/tasksSlice";
import { AppDispatch } from "../../store";

export default function Search() {
	const [search, setSearch] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		dispatch(filterTasksBySearch(search));
	}, [search, dispatch]);

	return (
		<TextField
			value={search}
			onChange={handleChange}
			placeholder="Search"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<SearchRounded />
					</InputAdornment>
				),
				sx: {
					pl: ".5rem",
					height: "2.5rem",
				},
			}}
		/>
	);
}
