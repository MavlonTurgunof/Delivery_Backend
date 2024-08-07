import express from "express";

import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter
  .post("/get", authMiddleware, getCart)
  .post("/add", authMiddleware, addToCart)
  .post("remove", authMiddleware, removeFromCart);

export default cartRouter;
