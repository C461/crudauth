import express from "express";
import morgan from "morgan";
import authRoutes from "./Routes/auth.routes.js";
import taskRoutes from "./Routes/tasks.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "https://crudfront1-production.up.railway.app",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;
