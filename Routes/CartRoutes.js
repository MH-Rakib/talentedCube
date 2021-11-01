const route = require("express").Router();
let cart = require("../Model/cartModel");

route.get("/get/:email", (req, res) => {
  const token = req.params.email;
  cart
    .findOne({ userEmail: token })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.post("/addtocart", (req, res) => {
  const newCart = new cart({
    userEmail: req.body.userEmail,
    productsArray: req.body.productsArray,
  });

  newCart
    .save(newCart)
    .then((data) => {
      res.send(true);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
