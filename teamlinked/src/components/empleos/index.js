import React, { Component } from 'react';
import CreacionEmpleos from './CreacionEmpleos';
import SubirArchivos from '../foros/SubirArchivos';

//Estilos
//import '../styles/Redes.css'; 

class ListaEmpleos extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <CreacionEmpleos/>
                <SubirArchivos/>
            </React.Fragment>
        );
    }
}
 
export default ListaEmpleos;