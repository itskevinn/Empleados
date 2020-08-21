import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from './logo.svg'
import { NavLink } from 'react-router-dom'
import './estilos/nav.css'
function NavigationBar() {
  return (
    <div className="align-items-left-center">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <p>⠀⠀⠀⠀⠀⠀⠀</p>
        <Navbar.Brand><NavLink className="text-black-50" to="/"><img src={logo} alt="Logo React"></img></NavLink> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <p>⠀⠀⠀⠀⠀⠀⠀</p>
            <Nav.Link> <NavLink className="text-black-50" to="/Registro">Registrar</NavLink> </Nav.Link>
            <p>⠀⠀⠀⠀⠀⠀⠀</p>
            <Nav.Link ><NavLink className="text-black-50" to="/Consulta">Consultar</NavLink></Nav.Link>
            <p>⠀⠀⠀⠀⠀⠀⠀</p>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <p>⠀⠀⠀⠀⠀⠀⠀</p>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <p>⠀⠀⠀⠀⠀⠀⠀</p>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar;