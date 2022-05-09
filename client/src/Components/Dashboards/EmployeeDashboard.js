import React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

function EmployeeDashboard() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-5">
      <nav className="w-full max-w-[550px]">
        <ul className="flex flex-col gap-y-5">
          <Link to="/mes-emails" className="group">
            <li className="text-gray-700 font-bold border-2 border-red-600 p-5 rounded flex items-center gap-x-5 transition ease group-hover:text-red-600">
              <EmailOutlinedIcon />
              Consulter mes e-mails
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default EmployeeDashboard;
