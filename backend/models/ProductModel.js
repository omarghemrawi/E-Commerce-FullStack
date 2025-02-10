import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Array, require: true },
  category: { type: String, require: true },
  subCategory: { type: String, require: true },
  sizes: { type: Array, require: true },
  bestSeller: { type: Boolean, require: true },
  date: { type: Number, require: true },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
