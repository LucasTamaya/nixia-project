const mongoose = require("mongoose");

const mongoDbConnection = () => {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.connection.once("open", () => console.log("MONGODB connected"));
};

module.exports = mongoDbConnection;
