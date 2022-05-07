require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoDbConnection = require("./src/config/mongoDbConnection");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

mongoDbConnection();

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
