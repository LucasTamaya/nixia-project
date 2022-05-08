import React from "react";
import { Link } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

function DirectorDashboard() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-5">
      <nav className="w-full max-w-[550px]">
        <ul className="flex flex-col gap-y-5">
          <Link to="/ma-messagerie" className="group">
            <li className="text-gray-700 font-bold border-2 border-red-600 p-5 rounded flex items-center gap-x-5 transition ease group-hover:text-red-600">
              <EmailOutlinedIcon />
              Consulter les e-mails
            </li>
          </Link>
          <Link to="/creation-compte-employe" className="group">
            <li className="text-gray-700 font-bold border-2 border-red-600 p-5 rounded flex items-center gap-x-5 transition ease group-hover:text-red-600">
              <PersonAddAltIcon />
              Créer un compte employé
            </li>
          </Link>
          <Link to="/creation-compte-administrateur" className="group">
            <li className="text-gray-700 font-bold border-2 border-red-600 p-5 rounded flex items-center gap-x-5 transition ease group-hover:text-red-600">
              <EngineeringOutlinedIcon />
              Créer un compte administrateur
            </li>
          </Link>
          <Link to="/attribution-emails" className="group">
            <li className="text-gray-700 font-bold border-2 border-red-600 p-5 rounded flex items-center gap-x-5 transition ease group-hover:text-red-600">
              <AccountTreeOutlinedIcon />
              Attribuer des e-mails
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default DirectorDashboard;
