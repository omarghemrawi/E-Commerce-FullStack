import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import auth from "../middleware/auth.js";
import {
  placeOrder,
  placeOrderStripe,
  // placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/order.controller.js";

const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
//Payment Features
orderRouter.post("/place", auth, placeOrder);
orderRouter.post("/stripe", auth, placeOrderStripe);
// orderRouter.post("/razorpay", auth, placeOrderRazorpay);
//User Features
orderRouter.post("/userorders", auth, userOrders);

// Verify Payment
orderRouter.post("/verifyStripe", auth, verifyStripe);

export default orderRouter;
