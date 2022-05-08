import React, { useState } from "react";
import Axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    Axios.post("http://localhost:4000/register", {
      username: "Loic Alexandre Grondin",
      password: "123456",
    });
  };

  return <button onClick={handleRegister}>Submit</button>;
}

export default Register;
