import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import apiEndpoint from "../../helpers/apiEndpoint";
import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import EmailAttributionModal from "./EmailAttributionModal";
import Header from "../Header/Header";
import ErrorMessage from "../StatusMessage/ErrorMessage";

function EmailAttribution() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [emailId, setEmailId] = useState("");

  const [fetchNonAssignEmails, emailsLoading, emailsError, emails] = useFetch(
    `${apiEndpoint}non-assign-emails`
  );

  const [fetchEmployees, employeesLoading, employeesError, employees] =
    useFetch(`${apiEndpoint}employees`);

  useEffect(() => {
    fetchNonAssignEmails();
    fetchEmployees();
  }, []);

  if (emailsError || employeesError) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return <ErrorMessage message={emailsError || employeesError} />;
  }

  if (emailsLoading || employeesLoading) {
    return <LargeLoader />;
  }

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center gap-y-10 p-10">
        <h2 className="text-red-600 text-3xl text-center font-bold mt-20">
          Attribution d'emails
        </h2>

        {emails &&
          emails.map((email) => (
            <div
              key={email._id}
              className="group flex items-center cursor-pointer p-2 border-b border-gray-600 transition ease hover:shadow-lg"
              onClick={() => {
                setShowModal(true);
                setEmailId(email._id);
              }}
            >
              <div>
                <p className="text-gray-600 font-bold">{email.from}</p>
                <p className="text-red-600 ">{email.object}</p>
                <p className="text-gray-600 ">{email.body}</p>
              </div>

              <AccountTreeOutlinedIcon className="text-gray-600 group-hover:text-red-500 group-hover:scale-125" />
            </div>
          ))}

        {showModal && (
          <EmailAttributionModal
            emailId={emailId}
            employees={employees}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  );
}

export default EmailAttribution;
