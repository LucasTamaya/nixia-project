const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailSchema = new Schema({
  from: String,
  object: String,
  body: String,
  assignTo: String,
  status: String,
  comments: String,
});

module.exports = mongoose.models.Email || mongoose.model("Email", emailSchema);
