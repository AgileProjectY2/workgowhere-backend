const User = require("../models/userModel");
const Listing = require("../models/listingModel");

// Fetch all listing(s) by a user id
const user_dashboard = async (req, res) => {
  const id = req.params.id;

  try {
    let user = await User.findById({ _id: id });
    await user.populate("listingsPosted");

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
const user_delete_listing = async (req, res) => {
  const userId = req.params.id;
  const listingId = req.params.listing_id;

  try {
    // Delete listing from Listing schema
    await Listing.findByIdAndRemove(listingId);
    // Delete listing from User.listingsPosted schema
    const updateUser = await User.findById({ _id: userId });
    updateUser.listingsPosted.pop(listingId);
    await updateUser.save();

    if (res.status(200)) {
      res.send({ message: "Listing deleted successfully", updateUser });
    }
  } catch (err) {
    res.send({
      message: "Error deleting in Listing",
    });
  }
};

module.exports = {
  user_dashboard,
  user_new_listing,
  user_delete_listing,
};
