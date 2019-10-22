import React, { Component } from 'react';
import {Container} from 'react-bootstrap';


import '../styles/Chat.css'; //Estilos


class MiChat extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingTop: '10px' }}>
                 
            </Container>
        );
    }
}
 
export default MiChat;
