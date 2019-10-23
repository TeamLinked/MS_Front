import React, { Component } from 'react';
import ISesion from './ISesion';

//Estilos
//import '../styles/Redes.css'; 

class Sesion extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <ISesion/>
            </React.Fragment>
        );
    }
}
 
export default Sesion;