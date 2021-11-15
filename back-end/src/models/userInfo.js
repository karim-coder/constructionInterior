const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  type: {
    type: String,
  },
  date: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
