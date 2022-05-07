const express = require("express");
const router = express.Router();

const ConnexionController = require("../controllers/connexionController");

router.post("/connexion", ConnexionController);

module.exports = router;
