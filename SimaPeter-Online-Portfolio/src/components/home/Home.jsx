import React from 'react'
import Container from 'react-bootstrap/Container';
import Image from '../Img/Home.jpg';



function Home() {
  return (
    <Container>
        <section className="Home" >
          <div style={{
            width: '1920px',
            height: '1080px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${Image})`
          }}></div>
      
        </section>
    </Container>
  )
}

export default Home