import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../Img/circular-progress-bar.png';
import './Skills.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function Skills() {
  return (
    <section className="skills" id="skills" >
      <Container>
        <Row className="Row-Col">
          <Col>
          
            <h1>Skills</h1>
            <p>These are the skills I've gained during my learnership program</p>
        
        
          <div className="skills-bx">
            <Carousel responsive={responsive} infinite={true} className="skills-slider">
              <div className="item">
                  <img src={Image} alt="Image" />
                  <h2>HTML</h2>
              </div>
              <div className="item">
                  <img src={Image} alt="Image" />
                  <h2>CSS</h2>
              </div>
              <div className="item">
                  <img src={Image} alt="Image" />
                  <h2>JS</h2>
              </div>
              <div className="item">
                  <img src={Image} alt="Image" />
                  <h2>PY</h2>
              </div>
              <div className="item">
                  <img src={Image} alt="Image" />
                  <h2>JAVA</h2>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>

   

    
  )
}

export default Skills