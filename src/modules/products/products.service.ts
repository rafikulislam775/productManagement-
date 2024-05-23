import { TProducts } from "./products.interface";
import { Products } from "./products.models";


// post request logic  or function 
const createProduct = async (payLoad: TProducts) => {
  const result = await Products.create(payLoad);
  return result;
};
// get request logic or function
const getAllProducts = async () => {
  const result = await Products.find();
  return result;
}
// get request by Id logic or function findById came from mongoose 
const getProductById = async (productId: string) => {
  const result = await Products.findById(productId);
  return result;
}
// get request by Id logic or function findById came from mongoose 
const deleteProductById = async (productId: string) => {
  const result = await Products.updateOne({productId},{isDeleted:true});
  return result;
}
//update request logic or function
const updateProductById = async(productId: string,updateData:any) => {
  const result = await Products.findByIdAndUpdate(productId,updateData,
    {
      new: true,
    });
  return result;
}

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById
};
