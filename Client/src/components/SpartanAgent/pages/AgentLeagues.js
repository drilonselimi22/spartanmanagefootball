import React, { useState, useEffect } from "react";
import SidebarAgent from "../SidebarAgent";
import axios from "axios";
import { Form, Button, Table, Modal } from "react-bootstrap";

function AgentLeagues() {
  const [league, setLeague] = useState();
  const [dta, setDta] = useState();
  const [submitedRegister, setSubmitedRegister] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [logged, setlogged] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [leagueData, setLeagueData] = useState([]);

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("email");
    if (items != null) {
      setlogged(true);
    }
  });

  async function registerLeague() {
    await axios({
      method: "POST",
      url: "https://localhost:7122/api/League/addLeague",
      data: {
        leagueName: league,
      },
    }).then(
      (response) => {
        setInterval(function () {
          window.location.reload();
        }, 1000);
        console.log("response register referee", response);
        setSubmitedRegister(true);
      },
      (error) => {
        console.log("error", error);
        setRegistered(true);
      }
    );
  }

  // GET rewquest
  useEffect(() => {
    axios
      .get(`https://localhost:7122/api/League/getLeagues`)
      .then((response) => {
        setLeagueData(response.data);
      });
  }, []);

  // Delete request
  const onDelete = (leagueId) => {
    axios.delete(`https://localhost:7122/api/League/${leagueId}`).then(
      setInterval(function () {
        window.location.reload();
      }, 500)
    );
  };

  return (
    <div>
      {logged ? (
        <>
          <SidebarAgent />

          <Modal show={show} onHide={handleClose} animation={false} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Create League</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className='mb-3'>
                  <Form.Label>League Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setLeague(e.target.value)}
                    type='text'
                    placeholder='Enter League Name'
                  />
                </Form.Group>

                <Button
                  style={{ width: "auto" }}
                  variant='success'
                  type='submit'
                  onClick={registerLeague}
                >
                  Create League
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "25%",
              width: "1100px",
              backgroundColor: "#fff",
              padding: "30px",
            }}
          >
            <Button
              style={{ width: "auto" }}
              variant='success'
              onClick={handleShow}
            >
              Create League
            </Button>

            <Table striped bordered size='sm' style={{ textAlign: "center" }}>
              <thead>
                <tr>
                  <th>League Id</th>
                  <th>League Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {leagueData.map((data) => {
                  return (
                    <tr>
                      <td>{data.leagueId}</td>
                      <td>{data.leagueName}</td>
                      <td>
                        <Button variant='success'>Edit</Button>
                      </td>
                      <td>
                        <Button
                          onClick={() => onDelete(data.leagueId)}
                          variant='dark'
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      ) : (
        <div>
          <h4>Agent Stadium</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}

export default AgentLeagues;
