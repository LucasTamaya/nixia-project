import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import connexionValidationSchema from "../../helpers/connexionValidationSchema";
import apiEndpoint from "../../helpers/apiEndpoint";
import SmallLoader from "../Loaders/SmallLoader/SmallLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import SuccessMessage from "../StatusMessage/SuccessMessage";

function Connexion() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(connexionValidationSchema),
  });

  const handleConnexion = async ({ id_number, password }) => {
    setLoading(true);
    setError("");
    setData("");
    try {
      const { data } = await Axios.post(
        `${apiEndpoint}connexion`,
        {
          id_number,
          password,
        },
        { withCredentials: true } // permet d'enregistrer le cookie lors de la connexion
      );

      console.log(data);

      if (data.errorMessage === "Numéro d'identifiant invalide") {
        setError(data.errorMessage);
        setLoading(false);
      }

      if (data.errorMessage === "Mot de passe invalide") {
        setError(data.errorMessage);
        setLoading(false);
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

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-10 sm:flex-row">
      {error && <ErrorMessage message={error} />}

      {data && <SuccessMessage message={data} />}

      <img
        src="https://www.nixia.fr/wp-content/uploads/elementor/thumbs/logo_nixia-400x100-1-p833370v8u49zzpup3gv4phknz01bxtfmhibdzi9k8.png"
        alt="nixia system logo"
        className="w-[300px]"
      />

      <form
        onSubmit={handleSubmit(handleConnexion)}
        className="flex flex-col w-full max-w-[250px] gap-y-3"
      >
        <Controller
          control={control}
          name="id_number"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <input
                type="text"
                value={value || ""}
                className="w-full border border-gray-300 text-gray-600 rounded p-2 outline-none focus:border-gray-500 placeholder:text-gray-400"
                placeholder="Numéro d'identifiant"
                onChange={onChange}
              />
              {/* message erreur formulaire */}
              {!!error && (
                <p className="text-xs text-red-500">{error?.message}</p>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <input
                type="password"
                value={value || ""}
                className="w-full border border-gray-300 rounded p-2 outline-none focus:border-gray-500 placeholder:text-gray-400"
                placeholder="Mot de passe"
                onChange={onChange}
              />
              {/* message erreur formulaire */}
              {!!error && (
                <p className="text-xs text-red-500">{error?.message}</p>
              )}
            </div>
          )}
        />
        <button
          type="submit"
          className="flex justify-center items-center h-[40px] text-red-600 font-bold border-2 border-red-600 rounded transition ease sm:hover:text-white sm:hover:bg-red-600"
        >
          {!loading ? <>Connexion</> : <SmallLoader />}
        </button>
      </form>
    </div>
  );
}

export default Connexion;
