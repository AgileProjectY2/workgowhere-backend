const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
const account_register = async (req, res) => {
  const inputPassword = req.body.password;

  try {
    // Hash password
    let hash = await bcrypt.hash(inputPassword, 10);
    let newUser = new User({ ...req.body, password: hash });
    // Save data in database
    await newUser.save();

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
const account_login = async (req, res) => {
  const inputEmail = req.body.email;
  const inputPassword = req.body.password;

  try {
    let user = await User.findOne({ email: inputEmail });
    let passwordCheck = await bcrypt.compare(inputPassword, user.password);

    if (!passwordCheck) {
      return res.status(400).send({
        message: "Password does not match",
      });
    }

    // If passwords match, creat jwt token
    const token = jwt.sign(
      {
        userId: user._id,
        userEmail: user.email,
      },
      "RANDOM-TOKEN",
      { expiresIn: "24h" }
    );

    if (res.status(200)) {
      res.send({
        message: "Login successful",
        user,
        token,
      });
    }
  } catch (err) {
    res.send({ message: "Error login" });
  }
};

module.exports = {
  account_register,
  account_login,
};
