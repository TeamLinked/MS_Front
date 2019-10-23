import React, { Component } from 'react';
import CreateForo from './CreacionForos'

//Estilos
//import '../styles/Redes.css'; 

class Foros extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <React.Fragment>
                <CreateForo/>
            </React.Fragment>
        );
    }
}
 
export default Foros;