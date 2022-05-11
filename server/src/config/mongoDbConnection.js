const mongoose = require("mongoose");

// Connexion à la base de donnée
const mongoDbConnection = () => {
  mongoose.connect(process.env.MONGODB_URI);
  mongoose.connection.once("open", () => console.log("MONGODB connected"));
};

module.exports = mongoDbConnection;
