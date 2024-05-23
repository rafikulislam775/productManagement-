import { TProducts } from "./products.interface";
import { Products } from "./products.models";

const createProduct = async (payLoad: TProducts) => {
  const result = await Products.create(payLoad);
  return result;
};

export const ProductServices = {
  createProduct,
};
