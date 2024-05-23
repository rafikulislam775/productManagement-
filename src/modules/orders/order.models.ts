import { Schema, model } from "mongoose";
import { TOrders } from "./order.interface";

//2. Create a Schema corresponding to the document interface.
//sub schema
const ordersSchema = new Schema<TOrders>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// now to create a model
const OrdersModel = model("Order", ordersSchema);
export default OrdersModel;
