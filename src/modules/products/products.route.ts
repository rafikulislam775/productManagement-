import express from "express";
import { productsControllers } from "./products.controller";
// !we can get post get and put method from express. router function
const router = express.Router();
// Endpoint: /api/products created all products
router.post("/", productsControllers.createProduct);
// Endpoint: /api/products get  all products
router.get("/", productsControllers.getAllProducts);


export const productsRouter = router;
