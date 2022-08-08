let Listings = require("../models/listingModel");

// Fetch results based on estate
const results = (req, res) => {
  // res.send("This is the results/estate page");
  Listings.find()
    .then(listings =>res.json(listings))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  results
};
