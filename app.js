const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const database = mongoose.connection;
require("dotenv").config();
const mongoString = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running...");
});

// Connection to mongoDB
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to DB and throw any error if connection fails
database.on("error", err => {
  console.log(`Unable to connect to database. ${err}`);
});
// .once will only run one time
database.once("connected", () => {
  console.log("Database connected!");
});

// Connect all the routes
app.get("/", (req, res) => {
  res.json({ message: "Your server is live!" });
});
