const route = require("express").Router();
let user = require("../Model/userModel");

route.post("/register", (req, res) => {
  const newUser = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save(newUser)
    .then((data) => {
      console.log(data);
      res.send("Register done");
    })
    .catch((err) => {
      res.send(err);
    });
});

route.post("/login", (req, res) => {
  const userLogin = {
    email: req.body.email,
    password: req.body.password,
  };

  user
    .findOne(userLogin)
    .then((data) => {
      res.send("Login done");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = route;
