import express from "express";
import cors from "cors";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoutes.js";
import orderModel from "./models/orderModel.js";
import orderRouter from "./routes/orderRouter.js";
//middlewares
const app = express();
app.use(express.json());
app.use(cors());

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

export default app;
