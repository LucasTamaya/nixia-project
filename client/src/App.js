import { Routes, Route } from "react-router-dom";
import CreateAdmin from "./Components/AccountCreation/CreateAdmin";
import CreateEmployee from "./Components/AccountCreation/CreateEmployee";
import Connexion from "./Components/Connexion/Connexion";
import AdminDashboard from "./Components/Dashboards/AdminDashboard";
import DirectorDashboard from "./Components/Dashboards/DirectorDashboard";
import EmployeeDashboard from "./Components/Dashboards/EmployeeDashboard";
import ListOfCollaborators from "./Components/ListOfCollaborators/ListOfCollaborators";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Connexion />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/dashboard-directeur" element={<DirectorDashboard />} />
      <Route path="/dashboard-administrateur" element={<AdminDashboard />} />
      <Route path="/dashboard-employe" element={<EmployeeDashboard />} />
      <Route path="/creation-compte-employe" element={<CreateEmployee />} />
      <Route path="/creation-compte-administrateur" element={<CreateAdmin />} />
      <Route path="/liste-collaborateurs" element={<ListOfCollaborators />} />
      <Route path="*" element={<Connexion />} />
    </Routes>
  );
}

export default App;
