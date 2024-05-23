import { Request, Response } from "express";
import { Products } from "./products.models";
import { ProductServices } from "./products.service";
// eta request and response  k control korar jnn  use kaora
// then control service  k call kore

const createProduct = async (req: Request, res: Response) => {
  //     console.log(req.body);
  //   res.send("post request");
  // ekhane await kore model teke product data niye asse
  try {
    const productData = req.body;
    const result = await ProductServices.createProduct(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};

// now i can get all products using this service
const getAllProducts = async (req: Request, res: Response) => {
  try {
    // getAllProducts function asse service call teke
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};
// try to get Product By Id

const getProductById = async (req: Request, res: Response) => {
  try {
    // destructuring here
    const {productId} = req.params;
    console.log(productId)
    const result = await ProductServices.getProductById(productId);
    // const getProductById = async (productId: string) => {
    //   const result = await Products.findById(productId);
    //   return result;
    // }
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};












export const productsControllers = {
  createProduct,
  getAllProducts,
  getProductById
};
