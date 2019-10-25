import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import ListaAmigos from './ListaAmigos';

//Estilos
//import '../styles/Redes.css'; 

class MiRed extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <ListaAmigos />
            </React.Fragment>
        );
    }
}
 
export default MiRed;