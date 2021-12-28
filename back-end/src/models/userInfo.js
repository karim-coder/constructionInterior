const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  number: {
    type: Number,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  type: {
    type: String,
    // required: true,
  },
  date: {
    type: String,
    // required: true,
  },
});

mongoose.model("userInfo", userInfoSchema);

// const User = mongoose.model("User", userSchema);

// module.exports = User;
