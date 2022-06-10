import React, { useState } from "react";
import { Form, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Team(props) {
  const { id, stadium, name, city, photoUrl, isVerified } = props;
  const [token, setToken] = useState("");

  async function verifyTeam(e) {
    const t = localStorage.getItem("token");
    console.log("kida malli", t.length);
    setToken(t);

    axios({
      method: "put",
      url: `https://localhost:7122/api/Squad/${id}`,
      data: {
        teamId: id,
        stadiumId: stadium,
        name: name,
        city: city,
        isVerified: true,
        photoUrl: null
      },
      headers: {
        Authorization: `bearer ${t}`,
        "Content-Type": "multipart/form-data",
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
      <Table bordered hover responsive>
        <tbody>
          <tr>
            <td width={"10%"}>{id}</td>
            <td width={"10%"}>{stadium}</td>
            <td width={"20%"}>{name}</td>
            <td width={"20%"}>{city}</td>
            <td width={"20%"}>{isVerified ? "Verified" : "Unverified"}</td>
            <td width={"20%"}>
              <img src={photoUrl} width='100px' height='100px' />
            </td>
            <td width={"20%"}>
              <button onClick={verifyTeam}>Verify</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
