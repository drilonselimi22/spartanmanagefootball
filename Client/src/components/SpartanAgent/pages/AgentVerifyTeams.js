import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Table } from "reactstrap";
import { Link } from "react-router-dom";
import SidebarAgent from "../SidebarAgent";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { saveAs } from 'file-saver'

export default function AgentVerifyTeams(props) {

  const { squadLogoUrl, id, stadium, name, city, photoUrl, isVerified } = props;
  const [APIData, setAPIData] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    axios.get(`https://localhost:7122/api/Squad`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  function downloadImage(photoUrl) {
    saveAs(`${photoUrl}`, 'image.jpg');
  }

  async function verifyTeam(teamId) {
    const t = localStorage.getItem("token");
    console.log("kida malli", t.length);
    setToken(t);

    axios({
      method: "put",
      url: `https://localhost:7122/api/Squad/Verify/${teamId}`,
      data: {
        isVerified: true
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
      <SidebarAgent />

      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "25%",
          width: "1100px",
          backgroundColor: "#fff",
          padding: "20px"
        }}
      >
        <h2>Verify squads</h2>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Sqyad logo</th>
              <th>Squad Id</th>
              <th>Stadium Id</th>
              <th>Squad Name</th>
              <th>Squad City</th>
              <th>IsVerified</th>
              <th>Certification</th>
              <th>Download certificate</th>
              <th>Verify</th>
            </tr>
          </thead>

          <tbody style={{ alignItems: "center", textAlign: "center" }}>
            {APIData.map((data) => {
              return (
                <tr>
                  <td>
                    <img src={data.squadLogoUrl} width="70px" />
                  </td>
                  <td>{data.teamId}</td>
                  <td>{data.stadiumId}</td>
                  <td>{data.name}</td>
                  <td>{data.city}</td>
                  <td>{data.isVerified ? "Verified" : "Not verified"}</td>
                  <td>
                    <Zoom>
                      <picture>
                        <source media="(max-width: 1000px)" srcSet={photoUrl} />
                        <img src={data.photoUrl} width="120px" height="100px" />
                      </picture>
                    </Zoom>
                  </td>
                  <td>
                    <button onClick={() => downloadImage(data.photoUrl)}>Download</button>
                  </td>
                  <td>
                    <button onClick={() => verifyTeam(data.teamId)}>Verify</button>
                  </td>
                </tr>
              );
            })}
          </tbody>


        </Table>
      </div>
    </div>
  );
}