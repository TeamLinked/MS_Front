import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import CreacionUsuarios from './CreacionUsuarios';

//Estilos
//import '../styles/Usuarios.css'; 

class MiPerfil extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <CreacionUsuarios/>
            </React.Fragment>
        );
    }
}
 
export default MiPerfil;