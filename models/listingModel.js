const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ESTATES_SG = require("../utils/estates");
const formateDate = require("../utils/formateDate");

const listingSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  description: {
    type: String,
    unique: false,
    required: true
  },
  address: {
    streetOne: { type: String, required: true },
    streetTwo: { type: String, required: false },
    unitNum: { type: String, required: false },
    country: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  operatingHours: {
    start: { type: String, required: true },
    end: { type: String, required: true },
    daysClosed: [{ type: String, required: true }]
  },
  contactNum: {
    type: String,
    required: true
  },
  estate: {
    type: String,
    enum: ESTATES_SG,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  reservationUrl: {
    type: String,
    required: false
  },
  keywords: [
    {
      type: Object,
      required: false
    },
  ],
  images: {
    type: Object,
    required: false
  },
  listingOwner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  createdAt: {
    type: String,
    default: formateDate,
    immutable: true,
    required: true
  },
});

// Solidify this schema as a data model with mongoose
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
