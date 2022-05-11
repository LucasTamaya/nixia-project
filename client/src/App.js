import { Routes, Route } from "react-router-dom";
import CreateAdmin from "./Components/AccountCreation/CreateAdmin";
import CreateEmployee from "./Components/AccountCreation/CreateEmployee";
import Connexion from "./Components/Connexion/Connexion";
import ListOfCollaborators from "./Components/ListOfCollaborators/ListOfCollaborators";
import AddData from "./Components/AddData/AddData";
import ListOfEmails from "./Components/ListOfEmails/ListOfEmails";
import EmailAttribution from "./Components/EmailAttribution/EmailAttribution";
import MyEmails from "./Components/MyEmails/MyEmails";
import Dashboard from "./Components/Dashboards/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/creation-compte-employe" element={<CreateEmployee />} />
      <Route path="/creation-compte-administrateur" element={<CreateAdmin />} />
      <Route path="/liste-collaborateurs" element={<ListOfCollaborators />} />
      <Route path="/liste-emails" element={<ListOfEmails />} />
      <Route path="/mes-emails" element={<MyEmails />} />
      <Route path="/attribution-emails" element={<EmailAttribution />} />
      <Route path="/add-data" element={<AddData />} />
      <Route path="*" element={<Connexion />} />
    </Routes>
  );
}

export default App;
