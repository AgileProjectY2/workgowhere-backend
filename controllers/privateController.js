const User = require("../models/userModel");

// Fetch all listing(s) by a user id
const user_dashboard = async (req, res) => {
  const id = req.params.id;

  try {
    let user = await User.findById({ _id: id });
    user = await user.populate("listingsPosted");

    if (res.status(200)) {
      res.send({ message: "Data fetch successfully", user });
    }
  } catch (err) {
    res.send({
      message: "Error fetching data",
    });
  }
};

// Create a new listing by a user id
const user_new_listing = (req, res) => {
  //
};

// Delete a listing by is and user id
const user_delete_listing = (req, res) => {
  //
};

module.exports = {
  user_dashboard,
  user_new_listing,
  user_delete_listing,
};
