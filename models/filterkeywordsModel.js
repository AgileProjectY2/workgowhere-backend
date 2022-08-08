const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filterkeywordsSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

// Solidify this schema as a data model with mongoose
const Filterkeywords = mongoose.model("Filterkeywords", filterkeywordsSchema);
module.exports = Filterkeywords;
