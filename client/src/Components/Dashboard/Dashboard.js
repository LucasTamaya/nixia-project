import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

function Dashboard() {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-x-5">
      <div className="group border-4 border-red-600 p-8 rounded transition ease hover:bg-red-600">
        <EmailOutlinedIcon
          sx={{ fontSize: 80 }}
          className="text-red-600 group-hover:text-white"
        />
      </div>
      <div className="group border-4 border-red-600 p-8 rounded transition ease hover:bg-red-600">
        <PersonAddAltIcon
          sx={{ fontSize: 80 }}
          className="text-red-600 group-hover:text-white"
        />
      </div>
      <div className="group border-4 border-red-600 p-8 rounded transition ease hover:bg-red-600">
        <AccountTreeOutlinedIcon
          sx={{ fontSize: 80 }}
          className="text-red-600 group-hover:text-white"
        />
      </div>
    </div>
  );
}

export default Dashboard;
