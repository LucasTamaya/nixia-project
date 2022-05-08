import * as Yup from "yup";

const connexionValidationSchema = Yup.object({
  username: Yup.string()
    .min(3, "Ce nom est trop court")
    .required("Veuillez entrer un nom d'utilisateur"),
  password: Yup.string()
    .min(6, "Ce mot de passe est trop court")
    .required("Veuillez entrer un mot de passe"),
}).required();

export default connexionValidationSchema;
