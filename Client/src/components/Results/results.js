import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Table } from "react-bootstrap";
import "./results.css";
import team1 from "../../images/team1.png";
import team2 from "../../images/team2.png";
import Navigation from "../Navigation/navigation";
// import Footer from "../Footer/footer";

function Results() {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="results__header">
        <div className="results__header__content">
          <h1>Results</h1>
        </div>
      </div>

      <Container className="results__footer">
        <Card className="results__container">
          <Card.Body className="d-flex justify-content-between">
            <div style={{ padding: "30px" }}>
              <img src={team1} />
              <h5>Sportland</h5>
              <h6>Prishtina</h6>
            </div>
            <div className="results__info d-flex justify-content-between">
              <h1>1</h1>
              <h3>:</h3>
              <h1>3</h1>
            </div>
            <div style={{ padding: "30px" }}>
              <img src={team2} />
              <h5>Real Madrid</h5>
              <h6>Istogu</h6>
            </div>
          </Card.Body>
        </Card>

        <Card className="results__container">
          <Card.Body className="d-flex justify-content-between">
            <div style={{ padding: "30px" }}>
              <img src={team1} />
              <h5>Sportland</h5>
              <h6>Prishtina</h6>
            </div>
            <div className="results__info d-flex justify-content-between">
              <h1>1</h1>
              <h3>:</h3>
              <h1>3</h1>
            </div>
            <div style={{ padding: "30px" }}>
              <img src={team2} />
              <h5>Real Madrid</h5>
              <h6>Istogu</h6>
            </div>
          </Card.Body>
        </Card>

        <Card className="results__container">
          <Card.Body className="d-flex justify-content-between">
            <div style={{ padding: "30px" }}>
              <img src={team1} />
              <h5>Sportland</h5>
              <h6>Prishtina</h6>
            </div>
            <div className="results__info d-flex justify-content-between">
              <h1>1</h1>
              <h3>:</h3>
              <h1>3</h1>
            </div>
            <div style={{ padding: "30px" }}>
              <img src={team2} />
              <h5>Real Madrid</h5>
              <h6>Istogu</h6>
            </div>
          </Card.Body>
        </Card>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Results;
