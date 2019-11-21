//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Estilos
//import '../styles/Principal'; 


class Contenido extends Component {
    
    static propTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const {body} = this.props;
        
        return (  
            <div>
                {body}
            </div>
        );
    }
}
 
export default Contenido;