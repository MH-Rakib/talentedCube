const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  userEmail: {
    type: String,
    require: true,
  },
  productsArray: {
    type: Array,
    require: true,
  },
});

const cartModel = mongoose.model("cart", schema);

module.exports = cartModel;
