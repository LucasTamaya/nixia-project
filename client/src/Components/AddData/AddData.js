import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";

function AddData() {
  const [data, setData] = useState([]);

  const handleAddData = async () => {
    const res = await fetch(
      "https://fakerapi.it/api/v1/users?_quantity=20&_gender=male"
    );
    const data = await res.json();

    setData(data);

    data.data.map((x, i) => {
      axios.post("http://localhost:4000/add-data", {
        from: x.email,
        object: `Demande de devis ${i}`,
        body: "Bonjour, je souhaite avoir un devis pour les services que vous proposez.",
        assignTo: [],
        status: "En cours",
        comment: "",
      });
    });
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <Header />
      <div>
        <button className="border border-red-500" onClick={handleAddData}>
          Add Data
        </button>
      </div>
    </>
  );
}

export default AddData;
