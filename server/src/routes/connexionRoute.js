const express = require("express");
const router = express.Router();

const { isAuth } = require("../helpers/authMiddleware");

const {
  ConnexionController,
  QueryUserRole,
} = require("../controllers/connexionController");

router.post("/connexion", ConnexionController);
router.get("/user-role/:username", isAuth, QueryUserRole);

module.exports = router;
