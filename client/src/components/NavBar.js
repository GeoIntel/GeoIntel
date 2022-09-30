import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import MouseCoordinates from './MouseCoordinates'

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
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <MouseCoordinates />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar
