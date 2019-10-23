import React, { Component } from 'react';
import '../../styles/Usuarios.css';

class TarjetaUsuario extends Component {
    render(){
        return(
            <div className = "Card ">
                <div className="card-mt-4 border border-dark rounded" >
                    <div className="card-body">
                        <h5 className="card-title">{this.props.propiedad}</h5>
                        <p className="card-text">{this.props.texto}</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default TarjetaUsuario;