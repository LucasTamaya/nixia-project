const express = require("express");
const router = express.Router();

const {
  QueryAllCollaborators,
  QueryAllEmployees,
} = require("../controllers/collaboratorsController");

router.get("/collaborators", QueryAllCollaborators);
router.get("/employees", QueryAllEmployees);

module.exports = router;
