import express, { Request, Response } from "express";
// !we can get post get and put method from express. router function
const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  res.send("post request");
});

export const productsRouter = router;
