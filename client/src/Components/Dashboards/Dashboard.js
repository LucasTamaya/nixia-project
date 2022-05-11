import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import apiEndpoint from "../../helpers/apiEndpoint";
import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import AdminDashboard from "./AdminDashboard";
import DirectorDashboard from "./DirectorDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

function Dashboard() {
  const navigate = useNavigate();

  // Récupère la role de l'utilisateur afin de lui afficher le dashboard correspondant
  const [fetchData, loading, error, data] = useFetch(
    `${apiEndpoint}user-role/${localStorage.getItem("username")}`
  );

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (error === "Cookie invalide") {
      navigate("/connexion");
    }
  }, [error]);

  if (loading) {
    return <LargeLoader />;
  }

  if (data.role === "Directeur") {
    return <DirectorDashboard />;
  }

  if (data.role === "Administrateur") {
    return <AdminDashboard />;
  }

  if (data.role === "Employé") {
    return <EmployeeDashboard />;
  }
}

export default Dashboard;
