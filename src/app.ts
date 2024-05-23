// const express = require("express");
// convert it to import syntax to express
import express, { Application, Request, Response } from "express";
import { productsRouter } from "./modules/products/products.route";
import { ordersRouter } from "./modules/orders/order.route";

const app: Application = express();
//use parsers to get body data
app.use(express.json());
// for using existing routes and coming on routes file
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;


