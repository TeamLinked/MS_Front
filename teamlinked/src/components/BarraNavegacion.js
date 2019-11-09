import React, { Component } from 'react';

import {Navbar, Nav, Button, FormControl,  Form, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../styles/Header.css'; 


class BarraNavegacion extends Component {
    render() {
      return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <LinkContainer to="/home"><Nav.Link>TeamLinked</Nav.Link></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:"#343a40"}}>
            <Nav className="mr-auto" >
              <LinkContainer to="/empleos"><Nav.Link>Empleos</Nav.Link></LinkContainer>
              <LinkContainer to="/mired"><Nav.Link>Mi Red</Nav.Link></LinkContainer>
              <LinkContainer to="/foros"><Nav.Link>Foros</Nav.Link></LinkContainer>
              <LinkContainer to="/michat"><Nav.Link>Chat</Nav.Link></LinkContainer>

              <NavDropdown title="Usuario" id="collasible-nav-dropdown">
                <NavDropdown.Item> <LinkContainer to="/miperfil" style={{color:"#000000"}}><Nav.Link>Mi cuenta</Nav.Link></LinkContainer> </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item> <LinkContainer to="/sesion" style={{color:"#000000"}}><Nav.Link>LogOut</Nav.Link></LinkContainer> </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <LinkContainer to="/busqueda">
                <Button variant="outline-info">
                    Buscar
                </Button>
              </LinkContainer>
            </Form>
          </Navbar.Collapse>
        </Navbar>


      )
    }
}


export default BarraNavegacion