import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mukund Jain </span>
            from <span className="purple"> Moradabad, UP, India.</span>
            <br />
            I am currently <span className="purple"> BTech final year student</span> in <span className="purple">VIT</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight/> Watching Podcast
            </li>
            <li className="about-activity">
              <ImPointRight/> Human Observation
            </li>
            <li className="about-activity">
              <ImPointRight/> Reading Books 
            </li>
            <li className="about-activity">
              <ImPointRight/> Meditation 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tech is for making mankind one step better"
          </p>
          <footer className="blockquote-footer">Mukund</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
