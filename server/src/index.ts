import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import db from "./config/db";
import taskRouter from "./routes/api/taskRoutes";

dotenv.config();

db.connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", taskRouter);

app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
