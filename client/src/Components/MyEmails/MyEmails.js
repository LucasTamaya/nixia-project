import React, { useEffect, useState } from "react";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import apiEndpoint from "../../helpers/apiEndpoint";
import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import MailsHandling from "../MailsHandling/MailsHandling";
import Header from "../Header/Header";

function MyEmails() {
  const [showModal, setShowModal] = useState(false);
  const [emailId, setEmailId] = useState("");

  const [fetchData, loading, error, data] = useFetch(
    `${apiEndpoint}employee-emails/${localStorage.getItem("username")}`
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <LargeLoader />;
  }

  return (
    <>
      <Header />
      <div className="w-full flex flex-col justify-center items-center gap-y-10 p-10">
        <h2 className="text-red-600 text-3xl text-center font-bold mt-20">
          Liste d'emails
        </h2>

        {data &&
          data.map((email) => (
            <div
              key={email._id}
              className="relative cursor-pointer p-2 border-b border-gray-600 transition ease hover:shadow-lg"
              onClick={() => {
                if (email.status !== "En cours") {
                  return;
                }
                setShowModal(true);
                setEmailId(email._id);
              }}
            >
              <div className="absolute top-0 right-0 flex items-center gap-x-1">
                {email.status === "En cours" && (
                  <>
                    <AutorenewOutlinedIcon
                      sx={{ fontSize: 15 }}
                      className="text-yellow-400"
                    />
                    <span className="text-xs text-yellow-400 font-bold border border-yellow-400 rounded p-1">
                      En cours
                    </span>
                  </>
                )}

                {email.status === "*TERMINER*" && (
                  <>
                    <DoneOutlinedIcon
                      sx={{ fontSize: 15 }}
                      className="text-green-500"
                    />
                    <span className="text-xs text-green-500 font-bold border border-green-500 rounded p-1">
                      *TERMINER*
                    </span>
                  </>
                )}

                {email.status === "*ANNULER*" && (
                  <>
                    <CloseOutlinedIcon
                      sx={{ fontSize: 15 }}
                      className="text-red-600"
                    />
                    <span className="text-xs text-red-600 font-bold border border-red-600 rounded p-1">
                      *ANNULER*
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-600 font-bold">{email.from}</p>
              <p className="text-red-600 ">{email.object}</p>
              <p className="text-gray-600 ">{email.body}</p>
            </div>
          ))}

        {showModal && (
          <MailsHandling emailId={emailId} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
}

export default MyEmails;
