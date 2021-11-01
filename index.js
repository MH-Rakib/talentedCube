const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config(); // environment variables
const ProductRoutes = require("./Routes/ProductRoutes");
const CartRoutes = require("./Routes/CartRoutes");
const UserRoute = require("./Routes/UserRoute");
const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.vidik.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connected successfully");
      });
  } catch (err) {
    console.log("not connected" + err);
  }
};

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());

app.use("/product", ProductRoutes);
app.use("/cart", CartRoutes);
app.use("/user", UserRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
