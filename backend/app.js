const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const multer = require('multer');
app.use('/images', express.static(path.join('backend/images')))
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/resto", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const userRoutes = require("./routes/users");
const menuRoutes = require("./routes/menus");
const weatherRoutes = require("./routes/weather");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/menus", menuRoutes);
app.use("/api/weather", weatherRoutes);

module.exports = app;
