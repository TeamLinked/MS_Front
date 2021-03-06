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
                                    <h2>{"¡Bienvenido "+this.props.loginAccountInfo.nombre+" "+this.props.loginAccountInfo.apellido+" a TeamLinked!"}</h2>
                                </Card.Header>
                                <Card.Body >
                                    <Col>
                                        
                                        <LinkContainer to="/home" ><Button size="sm"><h2 style={{marginBottom:"0px"}}>Ir a la pagina principal</h2></Button></LinkContainer>
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
