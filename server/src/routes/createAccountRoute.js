const express = require("express");
const router = express.Router();

const {
  CreateEmployee,
  CreateAdmin,
} = require("../controllers/createAccountControllers");

router.post("/create-employee", CreateEmployee);
router.post("/create-admin", CreateAdmin);

module.exports = router;
