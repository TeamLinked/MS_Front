import React, { Component } from 'react';

import businessman from './assets/businessman.png';

import '../../styles/Sesion.css'; 

class PagInicial extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg" style={{background:'#037ad1'}}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end">
                        <a className="navbar-brand text-white mr-auto" href="./">TeamLinked</a>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Únete</button>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Ingresa</button>
                    </div>
                </nav>
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