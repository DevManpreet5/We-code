import React, { useEffect, useState } from "react";
import Menubar from "./Menubar";
import { useNavigate } from "react-router-dom";

function Languagemenu() {
  const [response, setResponse] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/code/:language/:id", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data.email);
        setResponse(data);
        if (!data.email) {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900">
      <Menubar></Menubar>
    </div>
  );
}

export default Languagemenu;
