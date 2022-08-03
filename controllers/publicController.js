const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

// Register a new user
const account_register = async (req, res) => {
  const inputPassword = req.body.password;

  try {
    // Hash password
    let hash = await bcrypt.hash(inputPassword, 10);
    let newUser = new User({ ...req.body, password: hash });
    // Save data in database
    newUser = await newUser.save();

    if (res.status(200)) {
      res.send({ message: "Account created successfully", newUser });
    }
  } catch (err) {
    if (err.code === 11000) {
      res.send({ message: "Email already exists", err });
    } else {
      res.send({ message: "Error creating account" });
    }
  }
};

// Login a user
const account_login = (req, res) => {
  //
};

module.exports = {
  account_register,
  account_login,
};
