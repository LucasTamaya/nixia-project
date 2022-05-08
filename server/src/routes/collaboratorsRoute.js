const express = require("express");
const router = express.Router();

const QueryAllCollaborators = require("../controllers/collaboratorsController");

router.get("/collaborators", QueryAllCollaborators);

module.exports = router;
