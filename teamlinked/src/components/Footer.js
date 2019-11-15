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
                    height:"50px",
                    color:"white",
                    backgroundColor: "#343a40",
                    alignItems:"center"
                }}>
                    
                    <Row>
                        <Col style={style}>
                            <p style={style}>TeamLinked, 2019</p>
                        </Col>
                    </Row>
                    
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer;