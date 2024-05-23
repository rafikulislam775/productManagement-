import { Request, Response } from "express";
import { orderServices } from "./orders.service";
const createOrder = async (req: Request, res: Response) => {
  try {
    const ordersData = req.body;
    const result = await orderServices.createOrder(ordersData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
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
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrders();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
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
// const getAllProducts = async (req: Request, res: Response) => {
//   try {
//     // getAllProducts function asse service call teke
//     const result = await ProductServices.getAllProducts();
//     res.status(200).json({
//       success: true,
//       message: "Products fetched successfully!",
//       data: result,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong!",
//       error: err,
//     });
//   }
// };

export const ordersControllers = {
  createOrder,
  getAllOrders,
  // getAllProducts,
};
