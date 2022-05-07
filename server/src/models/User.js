const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id_number: String,
  password: String,
  role: String,
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
