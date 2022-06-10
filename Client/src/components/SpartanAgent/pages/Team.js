import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import axios from "axios";
export default function Team(props) {
  const { id, stadium, name, city, isVerified } = props;
  const [token, setToken] = useState("");
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("email");
    if (items != null) {
      setlogged(true);
    }
    console.log("LOGGED???", logged);
  });
  function verifyTeam(e) {
    const t = localStorage.getItem("token");
    console.log("kida malli", t.length);
    setToken(t);
    axios({
      method: "put",
      url: `https://localhost:7122/api/Squad/${id}`,
      headers: {
        Authorization: `bearer ${t}`,
      },
      data: {
        teamId: id,
        stadiumId: stadium,
        name: name,
        city: city,
        isVerified: true,
      },
    })
      .then((res) => {
        console.log("succeded", res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("fucking failed", error);
      });
  }
  return (
    <div>
      {logged ? (
        <Table bordered hover responsive>
          <tbody>
            <tr>
              <td width={"10%"}>{id}</td>
              <td width={"10%"}>{stadium}</td>
              <td width={"20%"}>{name}</td>
              <td width={"20%"}>{city}</td>
              <td width={"20%"}>{isVerified ? "Verified" : "Unverified"}</td>
              <td width={"20%"}>
                <button onClick={verifyTeam}>Verify</button>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <div>
          <h4>Team</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}
