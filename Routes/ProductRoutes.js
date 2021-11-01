const route = require("express").Router();
let product = require("../Model/productModel");

route.get("/getAll", (req, res) => {
  product
    .find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.get("/get/:id", (req, res) => {
  const id = req.params.id;
  product
    .findById({ _id: id })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

route.post("/add", (req, res) => {
  const newProduct = new product({
    name: req.body.name,
    imageUrl: req.body.img,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    extraFeature: req.body.extraFeature,
  });

  newProduct
    .save(newProduct)
    .then((data) => {
      console.log(data);
      res.send(true);
    })
    .catch((err) => {
      res.send(err);
    });
});

route.put("/updateProduct/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const updatedProduct = new userInfo(updatedData);
  userInfo
    .findOneAndUpdate({ _id: id }, updatedProduct)
    .then((result) => {
      if (result) {
        res.send(true);
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
