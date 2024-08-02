import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import { listFood } from "./controllers/foodController.js";

//middlewares
const app = express();
app.use(express.json());
app.use(cors());

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

export default app;
