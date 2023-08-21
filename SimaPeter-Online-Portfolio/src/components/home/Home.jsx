import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Img from '../Img/landing-page-img.jpg';


function Home() {
  return (
    <Container>
        <section className="Home" >
            <div className="Home-content">
                <h3>Hello, I'm</h3>
                <h1>Sima Peter</h1>
                <p>A junior software developer  
                   I am a junior software developer based in Cape Town, 
                   currently building websites using front-end and back-end.</p>
                   <Button href="#">Download CV</Button>
                   


            </div>
        </section>
    </Container>
  )
}

export default Home