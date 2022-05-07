import * as Yup from "yup";

const connexionValidationSchema = Yup.object({
  id_number: Yup.string().required(
    "Veuillez entrer votre numéro d'identifiant"
  ),
  password: Yup.string()
    .min(6, "Ce mot de passe est trop court")
    .required("Veuillez entrer votre mot de passe"),
}).required();

export default connexionValidationSchema;
