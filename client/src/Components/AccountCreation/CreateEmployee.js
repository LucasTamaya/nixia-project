import React, { useState } from "react";

import apiEndpoint from "../../helpers/apiEndpoint";
import useCreateAccount from "../../Hooks/useCreateAccount";
import CreateAccountForm from "./CreateAccountForm";

function CreateEmployee() {
  const { createAccount, loading, error, data } = useCreateAccount(
    `${apiEndpoint}create-employee`
  );

  return (
    <CreateAccountForm
      role="employé"
      createAccount={createAccount}
      loading={loading}
      error={error}
      data={data}
    />
  );
}

export default CreateEmployee;
