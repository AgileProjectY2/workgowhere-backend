const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  //
});

// Solidify this schema as a data model with mongoose
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
