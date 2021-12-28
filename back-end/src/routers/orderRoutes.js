const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");

const userInfo = mongoose.model("userInfo");

const router = express.Router();
router.post("/orders", async (req, res) => {
  const { name, number, email, city, type, date } = req.body;
  if (!name || !number || !email || !city || !type || !date) {
    return res
      .status(422)
      .send({ error: "You must provide a all the details." });
  }
  try {
    const user = new userInfo({ name, number, email, city, type, date });
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});
// router.use(requireAuth);

router.get("/orders", requireAuth, async (req, res) => {
  const orders = await userInfo.find({});

  res.send(orders);
});

module.exports = router;
