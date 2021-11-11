const express = require("express");
const router = express.Router();
const User = require("../models/user");
router.post("/signup", (req, res) => {
  console.log("Here into BE, signup", req.body);
  const user = new User({
    lName: req.body.lName,
    fName: req.body.fName,
    email: req.body.email,
    pwd: req.body.pwd,
  });
  user.save().then((result) => {
    if (result) {
      res.status(200).json({ message: "Added with success" });
    }
  });
});

router.post("/login", (req, res) => {
  console.log("Here into BE, login", req.body);
});

module.exports = router;
