import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from '../Img/About-page-img.jpg';


function About() {
  return (
    <Container>
        <section className="About" >
          <div style={{
            width: '100%',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${Image})`
          }}></div>
      
        </section>
    </Container>
  )
}

export default About