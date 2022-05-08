import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

import axiosInstance from "../../helpers/axiosInstance";
import apiEndpoint from "../../helpers/apiEndpoint";

function EmailAttributionModal({ emailId, employees, setShowModal }) {
  const [assignEmployee, setAssignEmployee] = useState(""); // a modifier afin de pouvoir récupérer une liste de plusieurs employés

  useEffect(() => {
    console.log(assignEmployee);
  }, [assignEmployee]);

  const handleCheckBox = (e) => {
    if (!e.target.checked) {
      setAssignEmployee("");
    }
    if (e.target.checked) {
      setAssignEmployee(e.target.value);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!assignEmployee) {
      return;
    }

    try {
      const res = await axiosInstance.post(`${apiEndpoint}email-attribution`, {
        emailId,
        assignEmployee,
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/70">
      <div className="w-full max-w-[520px] bg-white rounded">
        <div className="w-full bg-red-600 flex justify-between items-center p-5 rounded-tl rounded-tr">
          <p className="text-white text-lg">Attribué cet email à:</p>
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
              !assignEmployee ? "bg-red-200 cursor-not-allowed" : "bg-red-600"
            } text-white font-bold rounded py-2 px-3 mr-auto mt-2`}
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailAttributionModal;
