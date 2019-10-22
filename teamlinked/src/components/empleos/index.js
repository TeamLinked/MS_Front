import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import CreacionEmpleos from './CreacionEmpleos'

//Estilos
//import '../styles/Redes.css'; 

class ListaEmpleos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <CreacionEmpleos/>
            </React.Fragment>
        );
    }
}
 
export default ListaEmpleos;