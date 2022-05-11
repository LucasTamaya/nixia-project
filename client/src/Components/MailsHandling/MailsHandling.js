import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../helpers/axiosInstance";
import apiEndpoint from "../../helpers/apiEndpoint";
import SuccessMessage from "../StatusMessage/SuccessMessage";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import SmallLoader from "../Loaders/SmallLoader/SmallLoader";

function MailsHandling({ emailId, setShowModal }) {
  const navigate = useNavigate();

  const [emailStatus, setEmailStatus] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(emailStatus);
  }, [emailStatus]);

  const handleCheckBox = (e) => {
    if (!e.target.checked) {
      setEmailStatus("");
    }
    if (e.target.checked) {
      setEmailStatus(e.target.value);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!emailStatus) {
      return;
    }

    setLoading(true);

    try {
      const { data } = await axiosInstance.post(
        `${apiEndpoint}email-handling`,
        {
          emailId,
          emailStatus,
          comment,
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
      {data && <SuccessMessage message={data} />}

      <div className="w-full max-w-[520px] bg-white rounded">
        <div className="w-full bg-red-600 flex justify-between items-center p-5 rounded-tl rounded-tr">
          <p className="text-white text-lg">Traiter cet e-mail: </p>
          <CloseIcon
            className="text-white cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        <form onSubmit={handleForm} className="flex flex-col gap-y-2 p-5">
          <div className="flex justify-between items-center gap-x-5">
            <div className="flex flex-col gap-y-2 p-5">
              <div className="flex items-center gap-x-5">
                <input
                  type="radio"
                  id="terminer"
                  name="status"
                  value="*TERMINER*"
                  onClick={(e) => handleCheckBox(e)}
                />
                <label htmlFor="terminer" className="cursor-pointer">
                  *TERMINER*
                </label>
              </div>
              <div className="flex items-center gap-x-5">
                <input
                  type="radio"
                  id="anuler"
                  name="status"
                  value="*ANNULER*"
                  onClick={(e) => handleCheckBox(e)}
                />
                <label htmlFor="anuler" className="cursor-pointer">
                  *ANNULER*
                </label>
              </div>
            </div>

            <textarea
              placeholder="Commentaire si nécessaire"
              className="flex-1 text-gray-600 resize-none border border-gray-600 rounded h-[80px] p-2 outline-none"
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`${
              !emailStatus
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

export default MailsHandling;
