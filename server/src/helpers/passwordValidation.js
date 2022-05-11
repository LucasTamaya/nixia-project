const bcrypt = require("bcrypt");

// Fonction afin de comparer des mots de passes
const passwordValidation = async (user, password) => {
  const matchPasswords = await bcrypt.compare(password, user.password);

  if (!matchPasswords) {
    console.log("invalid password");
    return false;
  }

  if (matchPasswords) {
    console.log("valid password");
    return true;
  }
};

module.exports = passwordValidation;
