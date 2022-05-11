const express = require("express");
const router = express.Router();

const { isAuth, isAuthAsAdmin } = require("../helpers/authMiddleware");

const {
  QueryAllEmails,
  QueryNonAssignEmails,
  QueryEmployeeEmails,
  EmailAttribution,
  EmailHandling,
} = require("../controllers/emailsController");

router.get("/emails", isAuthAsAdmin, QueryAllEmails);
router.get("/non-assign-emails", isAuthAsAdmin, QueryNonAssignEmails);
router.get("/employee-emails/:username", isAuth, QueryEmployeeEmails);
router.post("/email-attribution", isAuthAsAdmin, EmailAttribution);
router.post("/email-handling", isAuth, EmailHandling);

module.exports = router;
