import React, { Component } from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logOut } from '../actions';

import '../styles/Header.css'; 


class BarraNavegacion extends Component {
    render() {
      
      if (this.props.loginAccountInfo){
        //console.log(this.props.loginAccountInfo);
        return (
          <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom:"0px", zIndex:"100"}}>
            <Navbar.Brand>
              <LinkContainer to="/home"><Nav.Link>TeamLinked</Nav.Link></LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" style={{backgroundColor:"#343a40"}}>
              
              

              <Nav>
                <LinkContainer to="/empleos"><Nav.Link>Empleos</Nav.Link></LinkContainer>
                <LinkContainer to="/mired"><Nav.Link>Mi Red</Nav.Link></LinkContainer>
                <LinkContainer to="/foros"><Nav.Link>Foros</Nav.Link></LinkContainer>
                <LinkContainer to="/michat"><Nav.Link>Chat</Nav.Link></LinkContainer>
                <LinkContainer to="/miperfil" ><Nav.Link>Mi cuenta</Nav.Link></LinkContainer>
                <LinkContainer to="/home" ><Nav.Link onClick={this.props.logOut}>LogOut</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
      }
      
      return (
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{marginBottom:"0px", zIndex:"100"}}>
          <Navbar.Brand>
            <LinkContainer to="/home"><Nav.Link>TeamLinked</Nav.Link></LinkContainer>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav" style={{backgroundColor:"#343a40"}}>
            <Nav>
              <LinkContainer to="/sesion"><Nav.Link>Iniciar sesión</Nav.Link></LinkContainer>
              <LinkContainer to="/registro"><Nav.Link>Registrarse</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      )
    }
}

// Para conectar react con redux
const mapStateToProps = (state) => {
  
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, { logOut })(BarraNavegacion);

