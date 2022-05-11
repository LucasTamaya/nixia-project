import React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import Header from "../Header/Header";

function EmployeeDashboard() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex justify-center items-center p-5">
        <nav className="w-full max-w-[550px]">
          <ul className="flex flex-col gap-y-5">
            <Link to="/mes-emails" className="group">
              <li className="text-gray-500 text-2xl font-bold border-2 border-gray-500 rounded p-4 flex items-center gap-x-5 transition ease-out duration-300 group-hover:border-red-600 hover:text-red-600 hover:scale-105">
                <EmailOutlinedIcon />
                Consulter mes e-mails
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default EmployeeDashboard;
