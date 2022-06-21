import React, { useState, useEffect } from 'react'
import SidebarAgent from '../SidebarAgent'
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap';

function AgentLeagues() {

    const [league, setLeague] = useState();
    const [leagueData, setLeagueData] = useState([]);
    const [dta, setDta] = useState();

    const [submitedRegister, setSubmitedRegister] = useState(false);
    const [registered, setRegistered] = useState(false);

    async function registerLeague(e) {
        e.preventDefault();
        await axios({
            method: "post",
            url: "https://localhost:7122/api/League/addLeague",
            data: {
                leagueName: league
            },
        }).then(
            (response) => {
                console.log("response register referee", response);
                setSubmitedRegister(true);
            },
            (error) => {
                console.log("error", error);
                setRegistered(true);
            }
        );
    }

    useEffect(() => {
        axios.get(`https://localhost:7122/api/League/getLeagues`)
            .then((response) => {
                setLeagueData(response.data);
            })
    }, [])

    return (
        <div>
            <SidebarAgent />
            <div style={{
                position: "absolute",
                top: "50%",
                left: "56%",
                display: "flex",
                transform: "translate(-50%, -50%)",
                width: "1000px",
                justifyContent: "space-between",
                padding: "50px",
                backgroundColor: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
            }}>
                <div>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>League Name</Form.Label>
                            <Form.Control
                                onChange={(e) => setLeague(e.target.value)}
                                type="text"
                                placeholder="Enter League Name"
                            />
                        </Form.Group>

                        <button type="submit" onClick={registerLeague} style={{
                            backgroundColor: "#009444",
                            color: "#fff"
                        }}>
                            Create league
                        </button>
                    </Form>
                </div>
                <div>
                    <Table bordered hover style={{
                        width: "450px"
                    }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>League Name</th>
                                <th>X</th>
                            </tr>
                        </thead>
                        {leagueData.map((data) => {
                            return (
                                <tbody>
                                    <tr>
                                        <th>{data.leagueId}</th>
                                        <th>{data.leagueName}</th>
                                        <th style={{ color: "red", cursor: "pointer" }}>Delete</th>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default AgentLeagues