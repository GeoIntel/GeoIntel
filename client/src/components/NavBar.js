import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar bg="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="GeoIntel"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default NavBar
