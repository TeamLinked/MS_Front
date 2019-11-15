import React, { Component } from 'react'
import principal from '../../assets/principal.jpg'; 
import {Container, Image} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class PaginaPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }


    handleSelect(selectedIndex, e){
        this.setState({
            setIndex: selectedIndex,
            setDirection: e.direction
        })
    };

    render() { 
        return (
            <React.Fragment>
                <div style={{position:"relative"}}>
                    <Image
                    fluid
                    src={principal}
                    style={{
                        width: "100%",
                        height: "100%",
                        padding: "0px"
                    }}
                    />
                    <Container style={{
                        backgroundColor: "rgba(0,0,0, 0.4)",
                        color: "white",
                        fontWeight:" bold",
                        border: "3px solid #f1f1f1",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: "80%",
                        height: "13rem",
                        margin: "auto",
                        textAlign: "center",
                        justifyContent:'center', 
                        alignItems:'center',
                    }}>
                        
                        <h1 style={{position:"relative", fontSize: "5vh", marginTop:"3%",marginBottom:"2%", textAlign:"center"}}>¡Conecta con la red profesional mas grande!</h1>
                        <LinkContainer to="/sesion" style={{position:"relative", fontSize: "0.8rem", marginRight:"5px",marginLeft:"5px"}}>
                            <Button>Iniciar Sesion</Button>
                        </LinkContainer>
                        <LinkContainer to="/registro" style={{position:"relative", fontSize: "0.8rem", marginRight:"5px",marginLeft:"5px"}}>
                            <Button >Registrarse</Button>
                        </LinkContainer>
                    </Container>
                </div>
            </React.Fragment>
        );
    }

}
 
export default PaginaPrincipal;
