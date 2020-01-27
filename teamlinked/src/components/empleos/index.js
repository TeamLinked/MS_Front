import React, { Component } from 'react';
import CreacionEmpleos from './CreacionEmpleos';
import Empleos from './Empleos';

//Estilos
//import '../styles/Redes.css'; 

class ListaEmpleos extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Empleos/>
            </React.Fragment>
        );
    }
}
 
export default ListaEmpleos;