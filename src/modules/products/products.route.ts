import express from "express";
import { productsControllers } from "./products.controller";
// !we can get post get and put method from express. router function
const router = express.Router();

router.post("/", productsControllers.createProduct);

export const productsRouter = router;
