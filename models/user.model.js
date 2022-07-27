const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //
});

// Solidify this schema as a data model with mongoose
const User = mongoose.model("User", userSchema);
module.exports = User;
