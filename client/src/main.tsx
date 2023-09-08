import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import Layout from "./Layout.tsx";
import "./index.css";
import store from "./store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<Layout>
				<App />
			</Layout>
		</Provider>
	</React.StrictMode>,
);
