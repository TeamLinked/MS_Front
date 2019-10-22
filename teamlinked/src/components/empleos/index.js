import React, { Component } from 'react';
import CreacionEmpleos from './CreacionEmpleos'

//Estilos
//import '../styles/Redes.css'; 

class ListaEmpleos extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <CreacionEmpleos/>
            </React.Fragment>
        );
    }
}
 
export default ListaEmpleos;