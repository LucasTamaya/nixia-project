const User = require("../models/User");

const QueryAllCollaborators = async (req, res) => {
  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const collaborators = await User.find({});

  return res.json(collaborators);
};

const QueryAllEmployees = async (req, res) => {
  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const employees = await User.find({ role: "Employé" });

  return res.json(employees);
};

module.exports = {
  QueryAllCollaborators,
  QueryAllEmployees,
};
