import app from "./app.js";
import { connectDB } from "./db.js";
import app from "./app.js";
import { connectDB } from "./db.js";

const port = process.env.PORT || 4000;
try {
  connectDB();
  app.listen(port, '0.0.0.0', () => {
    console.log("Server on port", port);
  });
} catch (error) {
  console.error("Error starting server:", error);
}
