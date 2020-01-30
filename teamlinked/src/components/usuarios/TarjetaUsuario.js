import React, { Component } from 'react';
import '../../styles/Usuarios.css';

class TarjetaUsuario extends Component {
    render(){
        return(
            <div className = "Card ">
                <div className="card-mt-4" >
                    <div className="card-body">
                        <h5 className="card-title border border-dark border-right-0 border-left-0 border-top-0 text-left font-weight-bold">{this.props.propiedad}</h5>
                        <p className="card-text text-left">{this.props.texto}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default TarjetaUsuario;