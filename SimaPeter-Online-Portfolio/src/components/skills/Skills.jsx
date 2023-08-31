import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Image from '../Img/skillsGIF.gif';
import 'animate.css'
import Image1 from '../Img/CSSicon.png';
import Image2 from '../Img/HTMLicon.png';
import Image3 from '../Img/JSicon.png';
import Image4 from '../Img/javaIcon.png';
import Image5 from '../Img/PyIcon.png';
import Image6 from '../Img/reactIcon.png';
import Image7 from  '../Img/NodeJSIcon.png';
import './Skills.css';


function Skills() {
  useEffect(() => {
    const images = document.querySelectorAll('.img-bounce');

    images.forEach((image, index) => {
      image.classList.add('animate__animated', 'animate__bounce', `animate__delay-${index + 1}s`);
    });
  }, []);


  return (
    <section className="skills" id="skills" >
      <Container className='skills-content-container'>
        <Row className="skills-Col">
          <Col>
            <h1 className='skills-heading'>Skills</h1>
            <p>These are the skills I've gained during my learnership program and intership</p>
          </Col>
        </Row>
        <Row>
        <Col md={6} className='GIF'>
            <img src={Image}  alt="Image"  className="img-gif"
            />
          </Col>
          <Col md={6} className='skills-icons'>
            <img src={Image1} alt="CSS" className="img-bounce" />
            <img src={Image2} alt="HTML" className="img-bounce" />
            <img src={Image3} alt="JavaScript" className="img-bounce" />
            <img src={Image4} alt="Java" className="img-bounce" />
            <img src={Image5} alt="Python" className="img-bounce" />
            <img src={Image6} alt="React" className="img-bounce" />
            <img src={Image7} alt="Node.js" className="img-bounce" />
          </Col>
          </Row>
      </Container>
    </section>

  
    
  )
}

export default Skills

