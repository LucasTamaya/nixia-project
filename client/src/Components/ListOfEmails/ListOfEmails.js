import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";

import Header from "../Header/Header";
import apiEndpoint from "../../helpers/apiEndpoint";
import useFetch from "../../Hooks/useFetch";
import LargeLoader from "../Loaders/LargeLoader/LargeLoader";
import ErrorMessage from "../StatusMessage/ErrorMessage";

function ListOfEmails() {
  const navigate = useNavigate();

  const [fetchData, loading, error, data] = useFetch(`${apiEndpoint}emails`);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <LargeLoader />;
  }

  if (error) {
    setTimeout(() => {
      navigate("/");
    }, 2000);
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center gap-y-10 p-10">
        <h2 className="text-red-600 text-3xl text-center font-bold mt-20">
          Liste d'emails
        </h2>

        {data &&
          data.map((email) => (
            <div
              key={email._id}
              className="relative p-2 border-b border-gray-600 transition ease hover:shadow-lg"
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
              <div className="flex items-center gap-x-1 mt-1">
                <ConnectWithoutContactOutlinedIcon
                  sx={{ fontSize: 20 }}
                  className="text-red-600"
                />
                <p className="text-gray-600 font-bold text-sm">
                  Attribué à:{" "}
                  {email.assignTo.map((username) => (
                    <span className="font-normal">{username}, </span>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-x-1 mt-1">
                <AssignmentOutlinedIcon
                  sx={{ fontSize: 20 }}
                  className="text-red-600"
                />
                <p className="text-gray-600 font-bold text-sm">
                  Commentaire:{" "}
                  <span className="font-normal">{email.comment}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ListOfEmails;
