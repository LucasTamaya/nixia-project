import { Routes, Route } from "react-router-dom";
import CreateAdmin from "./Components/AccountCreation/CreateAdmin";
import CreateEmployee from "./Components/AccountCreation/CreateEmployee";
import Connexion from "./Components/Connexion/Connexion";
import AdminDashboard from "./Components/Dashboards/AdminDashboard";
import DirectorDashboard from "./Components/Dashboards/DirectorDashboard";
import EmployeeDashboard from "./Components/Dashboards/EmployeeDashboard";
import ListOfCollaborators from "./Components/ListOfCollaborators/ListOfCollaborators";
// import Register from "./Components/Register/Register";
import AddData from "./Components/AddData/AddData";
import ListOfEmails from "./Components/ListOfEmails/ListOfEmails";
import EmailAttribution from "./Components/EmailAttribution/EmailAttribution";

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
      <Route path="/liste-emails" element={<ListOfEmails />} />
      <Route path="/attribution-emails" element={<EmailAttribution />} />
      <Route path="/add-data" element={<AddData />} />
      <Route path="*" element={<Connexion />} />
    </Routes>
  );
}

export default App;
