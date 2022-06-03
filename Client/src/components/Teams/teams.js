import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Table } from "react-bootstrap"; 
import "./teams.css";
import { Container } from "react-bootstrap";
import teamone from "../../images/istogulogo.png";
import teamtwo from "../../images/prishtinalogo.png";
import teamthree from "../../images/drenicalogo.png";
import teamfour from "../../images/trepcalogo.png";
import teamfive from "../../images/ulpianalogo.png";
import teamsix from "../../images/malishevalogo.png"; 

function Teams() {
  return (
    <div>
      <div className="teams__header">
        <div className="teams__header__container">
          <h1>Teams</h1>
        </div>
      </div>

      <Container className="team__footer">
        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamone} width="200px" />
          <Card.Body>
            <Card.Title>Istogu</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamtwo} width="200px" />
          <Card.Body>
            <Card.Title>Prishtina</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamthree} width="200px" />
          <Card.Body>
            <Card.Title>Drenica</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamfour} width="200px" />
          <Card.Body>
            <Card.Title>Trepca</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamfive} width="200px" />
          <Card.Body>
            <Card.Title>Ulpiana</Card.Title>
          </Card.Body>
        </Card>

        <Card
          className="team__card"
          style={{ width: "300px", alignItems: "center" }}
        >
          <img src={teamsix} width="200px" />
          <Card.Body>
            <Card.Title>Malisheva</Card.Title>
          </Card.Body>
        </Card>
      </Container> 
    </div>
  );
}

export default Teams;
