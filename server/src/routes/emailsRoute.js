const express = require("express");
const router = express.Router();

const {
  QueryAllEmails,
  QueryNonAssignEmails,
  QueryEmployeeEmails,
  EmailAttribution,
  EmailHandling,
} = require("../controllers/emailsController");

router.get("/emails", QueryAllEmails);
router.get("/non-assign-emails", QueryNonAssignEmails);
router.get("/employee-emails/:username", QueryEmployeeEmails);
router.post("/email-attribution", EmailAttribution);
router.post("/email-handling", EmailHandling);

module.exports = router;
