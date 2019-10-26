//Dependencias
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';


//Estilos
import '../../styles/App.css';
import '../../styles/Usuarios.css';
import stock from '../../assets/stock.png';
import * as user from '../../datos/user.json';
//import './components/Card.css';

//Componentes
import TarjetaUsuario from './TarjetaUsuario';


class PerfilUsuario extends Component {

    constructor() {
        super();
        this.user = user;
        this.id = 0;

    }

    componentDidMount() {
        const query = `
            query{
              getUsuarios{
                id
                nombre
                apellido
                email
                identificacion
                nacionalidad
                perf_profesional
                perf_personal
              }
            }
        `;
        const url = "https://cors-anywhere.herokuapp.com/http://34.94.59.230:3050/graphql";
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            body: JSON.stringify({ query })
        };
        fetch(url, opts)
            .then(res => res.json())
            .then(e => {
                this.user = e.data.getUsuarios[this.id];
                this.forceUpdate();
            })
            .catch(console.error);
    }


    render() {
        return (
            <div className="App" >
                <div className="container mt-4">
                    <div className="row align-items-center">
                        <div className="col-sm-2 ">
                            <img className="img-responsive App-image" src={stock} alt="stock"></img>
                        </div>
                        <div className="col-sm-7 ">
                            <h3>{this.user.nombre} {this.user.apellido}</h3>
                            <p className=" App-p" >{this.user.email}</p>
                            <p className=" App-p">{this.user.nacionalidad}</p>
                        </div>
                        <div className="col-sm-3">
                            <LinkContainer to="/crearusuario">
                                <button type="button">Editar usuario</button>
                            </LinkContainer>
                        </div>
                    </div>
                </div>

                <div className="container mt-4">
                    <TarjetaUsuario propiedad="Sobre mí" texto={this.user.perf_personal} />
                </div>
                <div className="container mt-4">
                    <TarjetaUsuario propiedad="Mi experiencia" texto={this.user.perf_profesional} />
                </div>
            </div>
        );
    }
}


export default PerfilUsuario;