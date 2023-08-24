import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Image from '../Img/Mzamomtsha-Primary.png';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row className='Row-Col'>
          <Col>
          <h2>Projects</h2>
          <div className="image-container">
            <OverlayTrigger
             placement="right"
             overlay={
              <Tooltip id="tooltip-link">
                <a href="https://melodic-nasturtium-8a6e3c.netlify.app/">Mzamomtsha Primary School Website</a>
              </Tooltip>
             }
             >
              <img src={ Image } alt="Image" className="Image-size" />      
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

export default Projects