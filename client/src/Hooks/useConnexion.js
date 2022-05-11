import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function useConnexion(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const connexion = async (username, password) => {
    setLoading(true);
    setError("");
    setData("");

    try {
      const { data } = await Axios.post(
        url,
        {
          username,
          password,
        },
        { withCredentials: true } // permet d'enregistrer le cookie lors de la connexion
      );

      console.log(data);

      if (data.errorMessage) {
        setLoading(false);
        setError(data.errorMessage);
        return;
      }

      setLoading(false);
      setData(data.successMessage);

      localStorage.setItem("username", data.username);

      // redirige l'utilisateur vers le dashboard après 2 secondes pour voir le "status message"
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.log(err);
      setError("Erreur inconnue, veuillez réessayer");
      setLoading(false);
    }
  };

  return {
    connexion,
    loading,
    error,
    data,
  };
}

export default useConnexion;
