const express = require("express");
const mongoose = require("mongoose");
const requireAuth = require("../middlewares/requireAuth");
const Interior = mongoose.model("Interior");

const router = express.Router();
// router.use(requireAuth);

router.get("/interior", async (req, res) => {
  const interior = await Interior.find({});

  res.send(interior);
});

router.post("/interior", requireAuth, async (req, res) => {
  const { url, theme, type } = req.body;

  if (!url || !theme || !type) {
    return res.status(422).send({ error: "You must provide all the details" });
  }
  try {
    const data = new Interior({ url, theme, type });
    await data.save();
    res.send(data);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
