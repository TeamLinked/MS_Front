import React, { Component } from 'react';

import { connect } from 'react-redux';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import ISesion from './ISesion';


//Estilos
//import '../styles/Redes.css'; 

class Sesion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        
        if (this.props.loginAccountInfo){
            console.log(this.props.loginAccountInfo);
            return (
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Card className="text-center"  >
                                <Card.Header>
                                    <h1>¡Bienvenido a TeamLinked!</h1>
                                </Card.Header>
                                <Card.Body >
                                    <Col>
                                        <h1>Estas logeado {this.props.loginAccountInfo.accountInfo} </h1>
                                        <LinkContainer to="/home" ><Button size="sm"><h3 style={{marginBottom:"0px"}}>Ir a la pagina principal</h3></Button></LinkContainer>
                                    </Col>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )
        }

        return (  
            <React.Fragment>
                <ISesion/>
            </React.Fragment>
        );
    }
}


// Para conectar react con redux
const mapStateToProps = (state) => {
  
    return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps)(Sesion);
