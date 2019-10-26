import React, { Component } from 'react';

import businessman from '../../assets/businessman.png';

import '../../styles/Sesion.css'; 

class PagInicial extends Component {
    render(){
        return(
            <div>
                <div className = "row align-items-center mt-4">
                    <div className = "col-2"></div>
                    <div className = "col-4">
                        <div className = "Registro-title">
                            Bienvenido a tu comunidad profesional
                        </div>
                    </div>
                        <div className = "col-4">
                            <img className="img-responsive Registro-image" src = {businessman} alt = "businessman"></img>
                        </div>
                    <div className = "col-2"></div>
                </div>
            </div>
        );
    }
}

export default PagInicial;