const mongoose = require("mongoose");
const productschema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  tittle: {
    type: String,
    maxlength: 40,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 200,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  filename:{
    type:String,
    required:true
  },
  path: {
    type:String,
    required:true
  } 
});
const Product = new mongoose.model("Product", productschema);
module.exports = Product;
