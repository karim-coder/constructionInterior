const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const adminUser = mongoose.model("adminUser");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // authorization = 'Bearer asdfdasfdasfasdf'

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { userId } = payload;

    const user = await adminUser.findById(userId);
    req.user = user;
    next();
  });
};
