const express = require("express");
const router = express.Router();

const { isAuthAsAdmin } = require("../helpers/authMiddleware");

const {
  CreateEmployee,
  CreateAdmin,
} = require("../controllers/createAccountControllers");

router.post("/create-employee", isAuthAsAdmin, CreateEmployee);
router.post("/create-admin", isAuthAsAdmin, CreateAdmin);

module.exports = router;
