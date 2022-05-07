import { Routes, Route } from "react-router-dom";
import Connexion from "./Components/Connexion/Connexion";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Connexion />} />
    </Routes>
  );
}

export default App;
