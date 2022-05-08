const User = require("../models/User");

const QueryAllCollaborators = async (req, res) => {
  console.log(req.session);

  if (!req.session.admin) {
    console.log("must be admin to view this page");
    return res.json({ errorMessage: "Must be admin to view this page" });
  }

  const collaborators = await User.find({});

  return res.json(collaborators);
};

module.exports = QueryAllCollaborators;
