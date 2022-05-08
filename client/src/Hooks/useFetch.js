import { useState } from "react";

import axiosInstance from "../helpers/axiosInstance";

// Custom hook pour fetch de la data sans se répéter dans le code
const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(url);
      setData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Erreur inconnue veuillez réessayer");
      setLoading(false);
    }
  };

  return [fetchData, loading, error, data];
};
export default useFetch;
