// Middleware afin de checker la validité du cookie de connexion de l'utilisateur
const isAuth = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.json({
      errorMessage: "Session expirée, veuillez vous reconnecter",
    });
  }
  next();
};

// Middleware afin de checker la validité du cookie de connexion de l'utilisateur + son role en tant qu'admin/directeur
const isAuthAsAdmin = (req, res, next) => {
  if (!req.session.isAuth) {
    return res.json({ errorMessage: "Accès refusé" });
  }
  next();
};

module.exports = { isAuth, isAuthAsAdmin };
