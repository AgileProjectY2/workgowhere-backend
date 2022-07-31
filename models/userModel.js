const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formateDate = require("../utils/formateDate");

const userSchema = new Schema({
  fullName: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  listingsPosted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
  ],
  createdAt: {
    type: String,
    default: formateDate,
    immutable: true,
    required: true,
  },
});

// Solidify this schema as a data model with mongoose
const User = mongoose.model("User", userSchema);
module.exports = User;
