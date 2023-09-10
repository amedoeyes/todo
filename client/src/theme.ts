import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = (mode: PaletteMode, primary: string, secondary: string) =>
	createTheme({
		palette: {
			mode: mode,
			background: {
				default: secondary,
				paper: secondary,
			},
			text: {
				primary: primary,
			},
			primary: {
				main: primary,
			},
			secondary: {
				main: secondary,
			},
		},
		components: {
			MuiIconButton: {
				defaultProps: {
					color: "primary",
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage:
							"linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
					},
				},
			},
		},
	});

const themes = {
	light: theme("light", "#000", "#fff"),
	dark: theme("dark", "#fff", "#000"),
};

export default themes;
