import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/coder.webp";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15, fontSize: 15 }} className="heading">
                Welcome To My Tech World!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Myself 
                <strong className="main-name"> Mukund Jain</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <h1 className="heading-name">I'm a</h1> 
                <p className="main-name"><Type /></p>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
