const express = require("express");
const router = express.Router();

const { isAuth } = require("../helpers/authMiddleware");

const {
  LoginController,
  QueryUserRole,
} = require("../controllers/connexionController");

router.post("/login", LoginController);
router.get("/user-role/:username", isAuth, QueryUserRole);

module.exports = router;
