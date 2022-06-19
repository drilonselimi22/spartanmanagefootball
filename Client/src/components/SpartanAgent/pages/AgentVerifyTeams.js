import axios from "axios";
import React, { useEffect, useState } from "react";
import Team from "./Team";
import { Form, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import SidebarAgent from "../SidebarAgent";

export default function AgentVerifyTeams() {
  const [APIData, setAPIData] = useState([]);
  const [squadsData, setSquadsData] = useState(false);

  function getSquads(e) {
    e.preventDefault();
    console.log("calling the function");
    const t = localStorage.getItem("token");
    console.log("token: ", t);
    axios({
      method: "get",
      url: "https://localhost:7122/api/Squad",
      headers: {
        Authorization: `bearer ${t}`,
      },
    }).then((response) => {
      setAPIData(response.data);
      console.log("response: ", response);
    });
    setSquadsData(true);
  }

  return (
    <div>
      <SidebarAgent />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "25%",
          width: "1000px",
        }}
      >
        <button onClick={getSquads}>GET SQUADSsss</button>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th width={"10%"}>Squad Id</th>
              <th width={"10%"}>Stadium Id</th>
              <th width={"20%"}>Squad Name</th>
              <th width={"20%"}>Squad City</th>
              <th width={"20%"}>Is Verified</th>
              <th width={"20%"}>Certification</th>
              <th width={"20%"}>Verify</th>
            </tr>
          </thead>
        </Table>
        {squadsData ? (
          APIData.map(
            ({ index, teamId, stadiumId, name, city, photoUrl, isVerified }) => (
              <Team
                key={teamId}
                id={teamId}
                stadium={stadiumId}
                name={name}
                city={city}
                photoUrl={photoUrl}
                isVerified={isVerified}
              />
            )
          )
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}
