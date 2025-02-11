import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
// import { Router } from "express";
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";
import orderRouter from "./routes/order.routes.js";

dotenv.config();
//App Config
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(express.json());


app.use(cors({
  origin: ['https://e-commerce-frontend-ywzc.onrender.com', 'https://e-commerce-frontend-ywzc.onrender.com/','https://e-commerce-admin-2pmh.onrender.com', 'https://e-commerce-admin-2pmh.onrender.com/', ]  // Add both versions
}));
;

//Api EndPoint
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  connectDB();
  connectCloudinary();
  console.log("Server Run On Port: //local:" + PORT);
});
