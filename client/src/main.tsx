import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import store from "./store.ts";
import themes from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={themes.light}>
				<CssBaseline />
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<App />
				</LocalizationProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
);
