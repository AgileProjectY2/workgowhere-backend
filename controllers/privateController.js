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
  const name = req.body.name;
  const description = req.body.description;
  const streetOne = req.body.address.streetOne;
  const streetTwo = req.body.address.streetOne;
  const unitNum = req.body.address.streetTwo;
  const country = req.body.address.country;
  const postalCode = req.body.address.postalCode;
  const start = req.body.operatingHours.start;
  const end = req.body.operatingHours.end;
  const daysClosed = req.body.operatingHours.daysClosed;
  const contactNum = req.body.contactNum;
  const estate = req.body.estate;
  const website = req.body.website;
  const reservationUrl = req.body.reservationUrl;
  const keywords = req.body.keywords;
  const images = req.body.images;

  const newListing = new Listing({
    name,
    description,
    address: {
      streetOne,
      streetTwo,
      unitNum,
      country,
      postalCode
    },
    operatingHours: {
      start,
      end,
      daysClosed
    },
    contactNum,
    estate,
    website,
    reservationUrl,
    keywords,
    images
  });

  newListing.save()
  .then(() => res.json("Listing added"))
  .catch(err => res.status(200).json("Error: " + err));
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
