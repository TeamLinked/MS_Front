//Dependencias
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'


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
    }
    

    componentDidMount() {
        if(this.props.loginAccountInfo){
            const Uid = this.props.loginAccountInfo.id;
            const query = `
                query {
                    getUsuario(id: ${Uid}){
                        user{
    				        nombre
                            apellido
                            email
                            identificacion
                            nacionalidad
                          	perf_profesional
                            perf_personal
                        }
                    }
                }
            `;
            const url = "http://34.94.208.170:3051/graphql";
            const opts = {
                method: "POST",
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
                body: JSON.stringify({ query })
            };
            fetch(url, opts)
                .then(res => res.json())
                .then(e => {
                    this.user = e.data.getUsuario.user;
                    this.forceUpdate();
                })
                .catch(console.error);
        }else{
            this.renderRedirect();
        }
    }
    
    
    renderRedirect = () => {
            return <Redirect to='/sesion' />
    }


    render() {
        
        if (this.props.loginAccountInfo){
            return (
                <div className="App" >
                    <div className="my-3 p-3 bg-white rounded shadow-sm container">
                        <div className="container mt-4">
                            <div className="row align-items-center">
                                <div className="col-sm-2 ">
                                    <img className="img-responsive App-image rounded-circle" src={stock} alt="stock"></img>
                                </div>
                                <div className="col-sm-7 ">
                                    <h3 className="font-weight-bold">{this.user.nombre} {this.user.apellido}</h3>
                                </div>
                                <div className="col-sm-3">
                                    <LinkContainer to="/crearusuario">
                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                                            Editar usuario
                                        </button>
                                    </LinkContainer>
                                </div>
                            </div>
                        </div>
        
                        <div className="container mt-2">
                            <TarjetaUsuario propiedad="Correo" texto={this.user.email} />
                        </div>
                        
                        <div className="container mt-4">
                            <TarjetaUsuario propiedad="Nacionalidad" texto={this.user.nacionalidad} />
                        </div>
                        
                        <div className="container mt-4">
                            <TarjetaUsuario propiedad="Sobre mí" texto={this.user.perf_personal} />
                        </div>
                        
                        <div className="container mt-4">
                            <TarjetaUsuario propiedad="Mi experiencia" texto={this.user.perf_profesional} />
                        </div>
                        
                    </div>
                </div>
            );
        }else{
            return(
                <div>
                {this.renderRedirect()}
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
  
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, null)(PerfilUsuario);
