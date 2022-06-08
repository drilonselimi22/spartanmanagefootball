import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SidebarAgent from '../SidebarAgent'

function AgentVerifyTeams() {

    function setData(data) {
        let { teamId, stadiumId, name, city, isVerified } = data;
        localStorage.setItem('Team Id', teamId);
        localStorage.setItem('Stadium Id', stadiumId);
        localStorage.setItem('Name', name);
        localStorage.setItem('City', city);
        localStorage.setItem('IsVerified', isVerified);
        console.log(data);
    }

    useEffect(() => {
        setTeamId(localStorage.getItem('Team Id'));
        setStadiumId(localStorage.getItem('Stadium Id'));
        setName(localStorage.getItem('Name'));
        SetCity(localStorage.getItem('City'));
        setIsVerified(localStorage.getItem('IsVerified'));
    }, []);

    const [teamId, setTeamId] = useState('');
    const [stadiumId, setStadiumId] = useState('');
    const [name, setName] = useState('');
    const [city, SetCity] = useState('');
    const [isVerified, setIsVerified] = useState(true);

    // const setData = (data) => {
    //     console.log(data.teamId);
    // }

    function verifyTeam(e) {
        // e.preventDefault();
        //https://localhost:7122/api/Squad/ID
        axios({
            method: "put",
            url: `https://localhost:7122/api/Squad/${teamId}`,
            data: {
                teamId: teamId,
                stadiumId: stadiumId,
                name: name,
                city: city,
                isVerified: true,
            },
            // headers: {
            //     Authorization: `bearer ${token}`,
            // },
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7122/api/Squad')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div>
            <SidebarAgent />
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '25%',
                width: '1000px'
            }}>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Squad Id</th>
                            <th>Stadium Id</th>
                            <th>Squad Name</th>
                            <th>Squad City</th>
                            <th>Is Verified</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {APIData.map((data) => {
                            return (
                                <tr>
                                    <td>{data.teamId}</td>
                                    <td>{data.stadiumId}</td>
                                    <td>{data.name}</td>
                                    <td>{data.city}</td>
                                    <td>{data.isVerified ? 'Verified' : 'Unverified'}</td>
                                    <td>
                                        <button to="/verify" onClick={() => setData(data)}>
                                            GetData
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={verifyTeam}>Verify</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div >
    )
}

export default AgentVerifyTeams
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
    console.log("CALLINNGGGGGGGGGGGGGGGGGGGGG");
    const t = localStorage.getItem("token");
    console.log("tokennnn", t);
    axios({
      method: "get",
      url: "https://localhost:7122/api/Squad",
      headers: {
        Authorization: `bearer ${t}`,
      },
    }).then((response) => {
      setAPIData(response.data);
      console.log("responseeee123123123", response);
    });
    setSquadsData(true);
  }
  //   useEffect(() => {

  //   }, []);
  function randomNum() {
    return Math.floor(Math.random() * 100000);
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
              <th width={"20%"}>Verify</th>
            </tr>
          </thead>
        </Table>
        {/* id, stadium, name, city, isVerified */}
        {squadsData ? (
          APIData.map(
            ({ index, teamId, stadiumId, name, city, isVerified }) => (
              //   console.log("indeeeeeeeeeeeeeeeeee12x", randomNum());
              <Team
                key={teamId}
                id={teamId}
                stadium={stadiumId}
                name={name}
                city={city}
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
