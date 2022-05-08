import React from "react";

import apiEndpoint from "../../helpers/apiEndpoint";
import useCreateAccount from "../../Hooks/useCreateAccount";
import CreateAccountForm from "./CreateAccountForm";

function CreateAdmin() {
  const { createAccount, loading, error, data } = useCreateAccount(
    `${apiEndpoint}create-admin`
  );
  return (
    <CreateAccountForm
      role="administrateur"
      createAccount={createAccount}
      loading={loading}
      error={error}
      data={data}
    />
  );
}

export default CreateAdmin;
