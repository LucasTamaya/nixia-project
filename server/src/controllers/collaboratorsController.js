const User = require("../models/User");

const QueryAllCollaborators = async (req, res) => {
  const collaborators = await User.find({});

  return res.json(collaborators);
};

const QueryAllEmployees = async (req, res) => {
  const employees = await User.find({ role: "Employé" });

  return res.json(employees);
};

module.exports = {
  QueryAllCollaborators,
  QueryAllEmployees,
};
