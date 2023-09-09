import cors from "cors";
import express from "express";
import morgan from "morgan";
import path from "path";
import db from "./config/db";
import taskRouter from "./routes/api/taskRoutes";

db.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", taskRouter);

const client = path.join(__dirname, "../../client/dist");

app.use(express.static(client));
app.use("*", (_, res) => res.sendFile(client));

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
