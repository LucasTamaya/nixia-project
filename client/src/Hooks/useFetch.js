import React, { useState, useEffect } from "react";

import apiEndpoint from "../helpers/apiEndpoint";
import axiosInstance from "../helpers/axiosInstance";

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

  return {
    fetchData,
    loading,
    error,
    data,
  };
};
export default useFetch;
