// const express = require("express");
// convert it to import syntax to express
import express, { Application, Request, Response } from "express";
import { productsRouter } from "./modules/products/products.route";

const app: Application = express();

// for using existing routes
app.use("/api/products", productsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;


