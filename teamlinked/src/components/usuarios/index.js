import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import CreacionUsuarios from './CreacionUsuarios';
import CreacionOrganizaciones from './CreacionOrganizaciones';
import PerfilUsuario from './PerfilUsuario';

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
                <PerfilUsuario/>
            </React.Fragment>
        );
    }
}
 
export default MiPerfil;