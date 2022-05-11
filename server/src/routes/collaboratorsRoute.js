const express = require("express");
const router = express.Router();

const { isAuth, isAuthAsAdmin } = require("../helpers/authMiddleware");

const {
  QueryAllCollaborators,
  QueryAllEmployees,
} = require("../controllers/collaboratorsController");

router.get("/collaborators", isAuthAsAdmin, QueryAllCollaborators);
router.get("/employees", isAuthAsAdmin, QueryAllEmployees);

module.exports = router;
