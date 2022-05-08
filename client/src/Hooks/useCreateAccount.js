import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function useCreateAccount(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const createAccount = async (username, password) => {
    setLoading(true);
    setError("");
    setData("");

    try {
      const { data } = await Axios.post(url, {
        username,
        password,
      });

      console.log(data);

      if (data.errorMessage) {
        setError(data.errorMessage);
        setLoading(false);
        return;
      }

      setLoading(false);
      setData(data.successMessage);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      console.log(err);
      setError("Erreur inconnue, veuillez réessayer");
      setLoading(false);
    }
  };

  return {
    createAccount,
    loading,
    error,
    data,
  };
}

export default useCreateAccount;
