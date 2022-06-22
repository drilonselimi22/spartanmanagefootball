import React, { useState, useEffect } from "react";
import axios from "axios";
import PaginatedItems from "./PaginationReferees/PaginatedItems";
export default function AgentRefereesList() {
  const [referees, setReferees] = useState([]); 

  const getData = async () => {
    console.log("fore calling ")
    const { data } = await axios.get("https://localhost:7122/api/Referees");
    setReferees(data);
    console.log("data",data)
    console.log("referees",referees)
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div>
      <PaginatedItems data={referees} />
    </div>
  );
}
