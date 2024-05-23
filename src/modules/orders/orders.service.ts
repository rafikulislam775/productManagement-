import { TOrders } from "./order.interface";
import OrdersModel from "./order.models";

// post request logic  or function
const createOrder = async (payLoad: TOrders) => {
  const result = await OrdersModel.create(payLoad);
  return result;
};
// get request logic or function
const getAllOrders = async () => {
  const result = await OrdersModel.find();
  return result;
};
// const getAllProducts = async () => {
//   const result = await Products.find();
//   return result;
// }

export const orderServices = {
  createOrder,
  getAllOrders,
};
