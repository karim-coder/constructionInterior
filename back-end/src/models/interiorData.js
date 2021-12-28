const mongoose = require("mongoose");

const interiorSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  theme: {
    type: String,
  },
  type: {
    type: String,
  },
});

mongoose.model("Interior", interiorSchema);

// const Interior = mongoose.model("Interior", userSchema);

// module.exports = Interior;
