import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import connexionValidationSchema from "../../helpers/connexionValidationSchema";
import SmallLoader from "../Loaders/SmallLoader/SmallLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import SuccessMessage from "../StatusMessage/SuccessMessage";

function CreateAccountForm({ role, createAccount, loading, error, data }) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(connexionValidationSchema),
  });

  const handleCreateAccount = ({ username, password }) => {
    createAccount(username, password);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-y-20">
      {error && <ErrorMessage message={error} />}

      {data && <SuccessMessage message={data} />}

      <h2 className="font-bold text-4xl text-red-600 text-center">
        Créer un compte {role}
      </h2>

      <form
        onSubmit={handleSubmit(handleCreateAccount)}
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
          {!loading ? <>Créer le compte</> : <SmallLoader />}
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
