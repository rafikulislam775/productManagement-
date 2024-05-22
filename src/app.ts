// const express = require("express");
// convert it to import syntax to express
import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
