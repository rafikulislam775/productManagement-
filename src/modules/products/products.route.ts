import express from "express";
import { productsControllers } from "./products.controller";
// !we can get post get and put method from express. router function
const router = express.Router();
// Endpoint: /api/products created all products
router.post("/", productsControllers.createProduct);
// Endpoint: /api/products get  all products
router.get("/", productsControllers.getAllProducts);

// Endpoint: /api/products/:productId
router.get("/:productId", productsControllers.getProductById);
// try to update one product 
router.put("/:productId", productsControllers.updateProductById);
// Endpoint: /api/products/:productId delete one
router.delete("/:productId", productsControllers.deleteProductById);

export const productsRouter = router;
