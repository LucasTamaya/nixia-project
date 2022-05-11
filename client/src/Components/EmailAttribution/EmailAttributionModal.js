import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../helpers/axiosInstance";
import apiEndpoint from "../../helpers/apiEndpoint";
import SuccessMessage from "../StatusMessage/SuccessMessage";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import SmallLoader from "../Loaders/SmallLoader/SmallLoader";

function EmailAttributionModal({ emailId, employees, setShowModal }) {
  const navigate = useNavigate();

  const [assignEmployee, setAssignEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  const handleCheckBox = (e) => {
    if (!e.target.checked) {
      setAssignEmployee((curr) =>
        [...curr].filter((x) => x !== e.target.value)
      );
    }
    if (e.target.checked) {
      setAssignEmployee((curr) => [...curr, e.target.value]);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (assignEmployee.length === 0) {
      return;
    }

    setLoading(true);

    try {
      const { data } = await axiosInstance.post(
        `${apiEndpoint}email-attribution`,
        {
          emailId,
          assignEmployee,
        }
      );

      if (data.errorMessage) {
        setError(data.errorMessage);
        setLoading(false);
      }

      setData(data.successMessage);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError("Erreur inconnue, veuillez réessayer");
      setLoading(false);
    }
  };

  if (error) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/70 p-4">
      {error && <ErrorMessage message={error} />}

      {data && <SuccessMessage message={data} />}

      <div className="w-full max-w-[520px] bg-white rounded">
        <div className="w-full bg-red-600 flex justify-between items-center p-5 rounded-tl rounded-tr">
          <p className="text-white text-lg">Attribuer cet e-mail à:</p>
          <CloseIcon
            className="text-white cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        <form onSubmit={handleForm} className="flex flex-col gap-y-2 p-5">
          {employees.map((employee) => (
            <div key={employee._id} className="flex items-center gap-x-5">
              <input
                type="checkbox"
                id={employee._id}
                value={employee.username}
                onClick={(e) => handleCheckBox(e)}
              />
              <label htmlFor={employee._id} className="cursor-pointer">
                {employee.username}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className={`${
              assignEmployee.length === 0
                ? "border border-red-200 text-red-200 cursor-not-allowed"
                : "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
            } font-bold h-[45px] flex justify-center items-center rounded px-3 mr-auto mt-2`}
          >
            {!loading ? <>Valider</> : <SmallLoader />}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailAttributionModal;
