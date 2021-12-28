const express = require("express");
const User = require("../models/userInfo");
const addminUser = require("../models/adminUser");
const Interior = require("../models/interiorData");
const router = express.Router();

//

// router.post("/signin", (req, res) => {
//   console.log(req.body);
//   res.send("You mad a ");
// });

//

router.post("/userinfo", async (req, res) => {
  try {
    const user = new User(req.body);
    await user
      .save()
      .then(() => {
        res.send("Thank you for response");
      })
      .catch((e) => {
        res.send(e);
      });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/interior-data", async (req, res) => {
  try {
    const interior = new Interior(req.body);
    await interior
      .save()
      .then(() => {
        res.send("Thank you for response");
      })
      .catch((e) => {
        res.send(e);
      });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/adminUser/signin", async (req, res) => {
  try {
    const user = await addminUser.findByCredential(
      req.body.userName,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ user: user.getPublicProfile() });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.post("/adminUser/signup", async (req, res) => {
  try {
    const user = new addminUser(req.body);
    await user
      .save()
      .then(() => {
        res.send("Admin has been created!");
      })
      .catch((e) => {
        res.send(e);
      });
  } catch (e) {
    res.status(404).send(e);
  }
});

router.get("/data", async (req, res) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (e) {
    res.send(e);
  }
});
router.get("/interior-data", async (req, res) => {
  try {
    const interior = await Interior.find({});
    res.send(interior);
  } catch (e) {
    res.send(e);
  }
});
module.exports = router;
