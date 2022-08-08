let Listings = require("../models/listingModel");
let Filterkeywords = require("../models/filterkeywordsModel")

// Fetch results based on estate
const allListings = (req, res) => {
  Listings.find()
    .then(listings =>res.json(listings))
    .catch(err => res.status(400).json("Error: " + err));
};

const allFilterkeywords = (req, res) => {
  Filterkeywords.find()
    .then(filterkeywords =>res.json(filterkeywords))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = {
  allListings,
  allFilterkeywords
};
