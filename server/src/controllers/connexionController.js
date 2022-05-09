const User = require("../models/User");
const passwordValidation = require("../helpers/passwordValidation");

const ConnexionController = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.find({ username });

  if (user.length === 0) {
    console.log("nom utilisateur invalide");
    return res.json({ errorMessage: "Nom d'utilisateur invalide" });
  }

  // test pour vérifier si le mot de passe correspond
  const isMatch = await passwordValidation(user[0], password);

  if (!isMatch) {
    console.log("mot de passe invalide");
    return res.json({ errorMessage: "Mot de passe invalide" });
  }

  if (user[0].role === "Directeur") {
    req.session.director = true;
  }

  if (user[0].role === "Administrateur") {
    req.session.admin = true;
  }

  if (user[0].role === "Employé") {
    req.session.employee = true;
  }

  return res.json({
    successMessage: "Connexion réussie",
    username: user[0].username,
    role: user[0].role,
  });
};

module.exports = ConnexionController;
