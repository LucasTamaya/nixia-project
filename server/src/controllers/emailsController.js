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

  const emails = await Email.find({ assignTo: "" });

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

  console.log(email);

  return res.json({ message: "email attribué !" });
};

module.exports = {
  QueryAllEmails,
  QueryNonAssignEmails,
  EmailAttribution,
};
