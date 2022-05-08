const User = require("../models/User");
const bcrypt = require("bcrypt");

const CreateEmployee = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = await User.find({ username });

  // si utilisateur deja existant
  if (user.length > 0) {
    console.log("user deja existant");
    return res.json({ errorMessage: "Utilisateur déjà existant" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    password: hashPassword,
    role: "Employé",
  });
  newUser.save();

  return res.json({ successMessage: "Compte employé crée" });
};

const CreateAdmin = async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = await User.find({ username });

  // si utilisateur deja existant
  if (user.length > 0) {
    console.log("user deja existant");
    return res.json({ errorMessage: "Utilisateur déjà existant" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    password: hashPassword,
    role: "Administrateur",
  });
  newUser.save();

  return res.json({ successMessage: "Compte administrateur crée" });
};

module.exports = {
  CreateEmployee,
  CreateAdmin,
};
