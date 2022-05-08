const express = require("express");
const router = express.Router();

const {
  QueryAllEmails,
  QueryNonAssignEmails,
  EmailAttribution,
} = require("../controllers/emailsController");

router.get("/emails", QueryAllEmails);
router.get("/non-assign-emails", QueryNonAssignEmails);
router.post("/email-attribution", EmailAttribution);

module.exports = router;
