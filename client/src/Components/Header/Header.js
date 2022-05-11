import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import nixiaLogo from "../../assets/img/nixia-logo.png";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="absolute bg-slate-100 w-full p-3">
      <div className="bg-white w-full rounded shadow-lg p-3">
        <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
          <img
            src={nixiaLogo}
            alt="nixia system logo"
            className="w-[100px] cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="group flex items-center gap-x-2 border-2 border-red-600 rounded cursor-pointer transition p-3 hover:bg-red-600">
            <LogoutIcon
              sx={{ fontSize: 20 }}
              className="text-red-600 transition group-hover:text-white"
            />
            <span className="text-red-600 text-md md:text-lg transition group-hover:text-white">
              Déconnexion
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
