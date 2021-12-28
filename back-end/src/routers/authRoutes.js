const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const adminUser = mongoose.model("adminUser");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = new adminUser({ userName, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const user = await adminUser.findOne({ userName });
  if (!user) {
    return res.status(422).send({ error: "Invalid password or email" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "MY_SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email2" });
  }
});

module.exports = router;
