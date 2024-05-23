import { Request, Response } from "express";
// import { Products } from "./products.models";
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
    // je name route e naming koresi tai dite hobe
    const { productId } = req.params;
    // console.log(productId) //             .getProductById came from service
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

// try to update one product 
const updateProductById = async(req: Request, res: Response)=>{
    const { productId } = req.params;
    //get data after change
    const updateData = req.body;
    // console.log(updateData)
    try {
      const result = await ProductServices.updateProductById(productId, updateData)
      res.status(200).json({
        success: true,
        message: "Product update successfully!",
        data: result,
      }); 
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err,
      });
      
    }
      
     
}

// try to get Product  and delete it
const deleteProductById = async (req: Request, res: Response) => {
  try {
    // destructuring here
    // je name route e naming koresi tai dite hobe
    const { productId } = req.params;
    //console.log(productId) //             .getProductById came from service
    const result = await ProductServices.deleteProductById(productId);
    // const getProductById = async (productId: string) => {
    //   const result = await Products.findById(productId);
    //   return result;
    // }
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data:null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: err,
    });
  }
};
// try to search products using regex
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;  
    console.log(searchTerm)
    const result = await ProductServices.searchProducts(searchTerm as string);
    res.status(200).json({
      success: true,
      message: "Products matching search term fetched successfully!",
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
  getProductById,
  updateProductById,
  deleteProductById,
  searchProducts
}
