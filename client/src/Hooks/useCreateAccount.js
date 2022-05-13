import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../helpers/axiosInstance";

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
      const { data } = await axiosInstance.post(url, {
        username,
        password,
      });

      if (data.errorMessage) {
        setError(data.errorMessage);
        setLoading(false);
        return;
      }

      setLoading(false);
      setData(data.successMessage);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
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
