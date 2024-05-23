import { Request, Response } from "express";
import { Products } from "./products.models";
import { ProductServices } from "./products.service";
// eta request and response  k control korar jnn  use kaora
// then control service  k call kore

const createProduct = async (req: Request, res: Response) => {
  //     console.log(req.body);
  //   res.send("post request");
  // ekhane await kore model teke product data niye asse
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const productsControllers = {
  createProduct,
};
