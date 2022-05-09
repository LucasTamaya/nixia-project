const Email = require("../models/Email");

const QueryAllEmails = async (req, res) => {
  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const emails = await Email.find({});

  return res.json(emails);
};

const QueryNonAssignEmails = async (req, res) => {
  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const emails = await Email.find({ assignTo: [] });

  return res.json(emails);
};

const QueryEmployeeEmails = async (req, res) => {
  console.log(req.params);
  const { username } = req.params;

  const emails = await Email.find({ assignTo: username });

  return res.json(emails);
};

const EmailAttribution = async (req, res) => {
  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const { emailId, assignEmployee } = req.body;

  const email = await Email.findByIdAndUpdate(emailId, {
    $set: { assignTo: assignEmployee },
  });

  return res.json({ successMessage: `Email attribué à ${assignEmployee}` });
};

const EmailHandling = async (req, res) => {
  const { emailId, emailStatus, comment } = req.body;

  const email = await Email.findByIdAndUpdate(emailId, {
    $set: { status: emailStatus, comment },
  });

  return res.json({ successMessage: "Email traité" });
};

module.exports = {
  QueryAllEmails,
  QueryNonAssignEmails,
  QueryEmployeeEmails,
  EmailAttribution,
  EmailHandling,
};
