import React, { Component } from 'react';

import {Navbar, Nav, Button, FormControl,  Form, Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../styles/Header.css'; 


class BarraNavegacion extends Component {
    render() {
      return (
        <Navbar bg="dark" variant="dark">
            <Col>
              <LinkContainer to="/home">
                  <Navbar.Brand>
                      <a className="navbar-brand text-white mr-auto" href="./">TeamLinked</a>
                  </Navbar.Brand>
              </LinkContainer>
            </Col>
            <Col md="auto" >
              <Nav className="justify-content-end">

                  <LinkContainer to="/empleos"><Nav.Link>Empleos</Nav.Link></LinkContainer>
                  <LinkContainer to="/mired"><Nav.Link>Mi Red</Nav.Link></LinkContainer>
                  <LinkContainer to="/foros"><Nav.Link>Foros</Nav.Link></LinkContainer>
                  <LinkContainer to="/michat"><Nav.Link>Chat</Nav.Link></LinkContainer>
                  <LinkContainer to="/miperfil"><Nav.Link>Mi cuenta</Nav.Link></LinkContainer>

                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <LinkContainer to="/busqueda">
                      <Button variant="outline-info">
                          Buscar
                      </Button>
                    </LinkContainer>
                  </Form>

              </Nav>
            </Col>
        </Navbar>
      )
    }
}


export default BarraNavegacion