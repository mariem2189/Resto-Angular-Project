const express = require("express");
const multer = require("multer");
const router = express.Router();
const Menu = require("../models/menu");

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
router.post(
  "/add",
  multer({ storage: storage }).single("image"),
  (req, res) => {
    console.log("Here into BE, Add menu", req.body);
    console.log("file", req.file);
    console.log("req.protocol", req.protocol);
    url = req.protocol + "://" + req.get("host");
    const menu = new Menu({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: url + "/images/" + req.file.filename,
    });
    menu.save().then((result) => {
      if (result) {
        res.status(200).json({ message: "Added with success" });
      }
    });
  }
);

module.exports = router;
