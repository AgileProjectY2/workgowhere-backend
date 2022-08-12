const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const database = mongoose.connection;
require("dotenv").config();
const mongoString = process.env.MONGODB_URI;
const auth = require("./utils/auth");

const privateRoutes = require("./routes/privateRoutes");
const publicRoutes = require("./routes/publicRoutes");
const resultsRoute = require("./routes/resultsRoute");

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
app.use("/private-user", auth, privateRoutes);
app.use("/public-user", publicRoutes);
app.use("/results", resultsRoute);
