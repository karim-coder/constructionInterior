// const express = require("express");
// require("../src/db/mongoose");
// const cors = require("cors");
// require("dotenv").config({ path: "./config/config.env" });

// const path = require("path");

// const app = express();

// const userRout = require("../src/routers/user");

// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(userRout);

// const port = process.env.PORTS;

// console.log(path.join(__dirname));
// app.get("/home", cors(), (req, res) => {
//   res.send("Cors test");
// });

// app.listen(port, () => {
//   console.log("Server is upto prot " + port);
// });

require("./models/adminUser");
require("./models/userInfo");
require("./models/interiorData");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routers/authRoutes");
const orderRoutes = require("./routers/orderRoutes");
const interiorRoutes = require("./routers/interiorRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(interiorRoutes);
app.use(authRoutes);
app.use(orderRoutes);

const mongoUri =
  "mongodb+srv://karim:Password123@emaily-dev.ypkun.mongodb.net/Marine?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
});

mongoose.connection.on("Connected", () => {
  console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.get("/", requireAuth, cors(), (req, res) => {
  res.send(`Your email: ${req.user.userName}`);
});

app.listen(3000, () => {
  console.log("Server is upto prot " + 3000);
});
