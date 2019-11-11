import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

var style={
    marginTop:"0.5rem",
    marginBottom:"0.4rem"
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <React.Fragment>
                <div style={{
                    position:"absolute",
                    bottom: "0px",
                    width:"100%",
                    height:"150px",
                    color:"white",
                    backgroundColor: "#343a40",
                }}>
                    
                    <Row >
                        <Col>
                            <p style={style}>Desarrollado por:</p>
                        </Col>
                        <Col>
                            <p style={style}>Andres Chavez</p>
                            <p style={style}>Yarid Perez</p>
                            <p style={style}>Sebastian Paez</p>
                            <p style={style}>Gabriel Aguirre</p> 
                        </Col>
                        <Col>
                            <p style={style}>Juan David Gaitan </p>
                            <p style={style}>Daniel Angulo</p>
                            <p style={style}>Ivan Delgado</p>
                        </Col>
                        <Col>
                            <p style={style}>TeamLinked, 2019</p>
                        </Col>
                    </Row>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;