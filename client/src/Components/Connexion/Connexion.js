import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import connexionValidationSchema from "../../helpers/connexionValidationSchema";
import apiEndpoint from "../../helpers/apiEndpoint";
import SmallLoader from "../Loaders/SmallLoader/SmallLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import SuccessMessage from "../StatusMessage/SuccessMessage";
import useConnexion from "../../Hooks/useConnexion";

function Connexion() {
  // Elements afin de gérer le formulaire (erreurs etc.)
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(connexionValidationSchema),
  });

  const { connexion, loading, error, data } = useConnexion(
    `${apiEndpoint}login`
  );

  const handleConnexion = ({ username, password }) => {
    connexion(username, password);
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
          name="username"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div>
              <input
                type="text"
                value={value || ""}
                className="w-full border border-gray-300 text-gray-600 rounded p-2 outline-none focus:border-gray-500 placeholder:text-gray-400"
                placeholder="Nom d'utilisateur"
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
