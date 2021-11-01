const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  imageUrl: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  extraFeature: {
    type: Array,
    require: true,
  },
});

const productModel = mongoose.model("product", schema);

module.exports = productModel;
