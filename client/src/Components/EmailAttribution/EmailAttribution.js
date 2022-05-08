import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import apiEndpoint from "../../helpers/apiEndpoint";
import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";
import EmailAttributionModal from "./EmailAttributionModal";

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

  useEffect(() => {
    if (emailsError) {
      console.log(emailsError);
    }

    if (employeesError) {
      console.log(employeesError);
    }

    if (emails || employees) {
      if (emails.errorMessage || employees.errorMessage) {
        navigate("/connexion");
      }
      console.log(emails);
      console.log(employees);
    }
  }, [emails, employees, emailsError, employeesError]);

  if (emailsLoading || employeesLoading) {
    return <LargeLoader />;
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-y-10 p-10">
      <h2 className="text-red-600 text-3xl text-center font-bold">
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
  );
}

export default EmailAttribution;
