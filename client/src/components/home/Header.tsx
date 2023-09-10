import { AppBar, Toolbar, Typography } from "@mui/material";
import Search from "./Search";

export default function Header() {
	return (
		<AppBar
			color="secondary"
			position="sticky"
			elevation={0}
			sx={{
				backgroundImage: "none",
			}}
		>
			<Toolbar
				sx={{
					padding: "1rem",
					justifyContent: "space-between",
					gap: "1rem",
				}}
			>
				<Typography variant="h5" fontWeight="bold">
					TODO
				</Typography>
				<Search />
			</Toolbar>
		</AppBar>
	);
}
