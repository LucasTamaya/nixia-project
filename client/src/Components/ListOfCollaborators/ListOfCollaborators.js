import React, { useState, useEffect } from "react";
import apiEndpoint from "../../helpers/apiEndpoint";

import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";

function ListOfCollaborators() {
  const [fetchData, loading, error, data] = useFetch(
    `${apiEndpoint}collaborators`
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LargeLoader />;
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-y-10 p-10">
      <h2 className="text-red-600 text-4xl text-center font-bold">
        Liste des collaborateurs
      </h2>

      {error && <ErrorMessage message="Erreur inconnue, veuillez réessayer" />}

      <div className="w-full max-w-[400px] flex flex-col items-center gap-y-5">
        {data &&
          data.map((collaborator) => (
            <div
              key={collaborator._id}
              className="group w-full flex justify-between items-center border-2 border-gray-600 rounded p-2"
            >
              <p className="text-gray-600 transition ease group-hover:font-bold">
                {collaborator.username}
              </p>
              <p className="text-gray-600 transition ease group-hover:font-bold">
                {collaborator.role}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListOfCollaborators;
