import app from "./app.js";
import { connectDB } from "./db.js";
import cors from "cors";

const corsOptions = {
  origin: [
    "https://crudfront1-production.up.railway.app/register ",
    "https://crudfront1-production.up.railway.app/login",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 4000;
try {
  connectDB();
  app.listen(port, "0.0.0.0", () => {
    console.log("Server on port", port);
  });
} catch (error) {
  console.error("Error starting server:", error);
}
