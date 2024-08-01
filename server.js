import express from "express";
import cors from "cors";
import { connectDB } from "./config/DBContext.js";
import foodRouter from "./routes/foodRoute.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
