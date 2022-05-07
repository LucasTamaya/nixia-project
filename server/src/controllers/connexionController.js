const User = require("../models/User");
const passwordValidation = require("../helpers/passwordValidation");

const ConnexionController = async (req, res) => {
  const { id_number, password } = req.body;

  const user = await User.find({ id_number: id_number });

  if (user.length === 0) {
    console.log("numéro id invalide");
    return res.json({ errorMessage: "Numéro d'identifiant invalide" });
  }

  // test pour vérifier si le mot de passe correspond
  const isMatch = await passwordValidation(user[0], password);

  if (!isMatch) {
    console.log("mot de passe invalide");
    return res.json({ errorMessage: "Mot de passe invalide" });
  }

  req.session.isAuth = true;

  console.log(req.session);

  return res.json({ successMessage: "Connexion réussie" });
};

module.exports = ConnexionController;
