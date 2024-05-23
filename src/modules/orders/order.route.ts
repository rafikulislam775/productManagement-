import express from "express";
import { ordersControllers } from "./orders.controller";
// !we can get post get and put method from express. router function
const router = express.Router();
// Endpoint: /api/orders  created
router.post("/", ordersControllers.createOrder);
// get all orders
router.get("/", ordersControllers.getAllOrders);
export const ordersRouter = router;
