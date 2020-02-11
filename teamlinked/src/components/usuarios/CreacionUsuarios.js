import React, { Component } from 'react';
import {Container, Card} from 'react-bootstrap';
import { connect } from 'react-redux';
import {Alert} from 'reactstrap';

//Estilos
//import '../styles/Usuarios.css'; 

import { CountryDropdown} from 'react-country-region-selector';

class CreacionUsuarios extends Component {
    constructor() {
        super();
        this.state = {
          nombre: '',
          apellido: '',
          correo: '',
          nacionalidad: '',
          fecha_nacimiento: '',
          contrasenaact: '',
          contrasenanew: '',
          contrasenaconfirm: '',
          descripcion: '',
          experiencia: '',
          previewimg: '',
          user: '',
          alertVisible: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    async componentDidMount() {
        if(this.props.loginAccountInfo){
            const Uid = this.props.loginAccountInfo.id;
            const query = `
                query {
                    getUsuario(id: ${Uid}){
                        user{
    				        nombre
                            apellido
                            email
                            nacionalidad
                          	perf_profesional
                            perf_personal
                            fecha_nac
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
            await fetch(url, opts)
                .then(res => res.json())
                .then(e => {
                    this.state.user = e.data.getUsuario.user;
                    this.state.nombre = this.state.user.nombre;
                    this.state.apellido = this.state.user.apellido;
                    this.state.nacionalidad = this.state.user.nacionalidad;
                    this.state.fecha_nacimiento = this.state.user.fecha_nac.substring(0,10);
                    this.state.descripcion = this.state.user.perf_personal;
                    this.state.experiencia = this.state.user.perf_profesional;
                    this.forceUpdate();
                })
                .catch(console.error);
        }else{
            this.renderRedirect();
        }
    }
    
        handleInputChange(e) {
            const {value, name} = e.target;
            this.setState({
            [name]: value
            });
        }
    
      handleSubmit(e) {
        this.query();
        e.preventDefault();
      }
      
      selectCountry (val) {
            this.setState({ nacionalidad: val });
        }
      
      query(){
          const Uid = this.props.loginAccountInfo.id;
          let query = `
            mutation{
                actUsuario(id: ${Uid}, 
                body:{
                nombre: "`+ this.state.nombre +`"
                apellido: "`+ this.state.apellido +`"
                nacionalidad: "` + this.state.nacionalidad + `"
                fecha_nac: "` + this.state.fecha_nacimiento +`"
                perf_personal: "`+ this.state.descripcion + `"
                perf_profesional: "`+this.state.experiencia+`"
            }){
                id
                }
            }
            `;
            const url = "http://34.94.208.170:3051/graphql";
 
            let opts = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify({ query })
            };
            
            fetch(url, opts)
                    .then(res => res.json())
                    .then(this.setState({alertVisible: true}))
                    .catch(e => {
                        console.log(e);
                    });
      }
      
    toggle(){
        this.setState({
            alertVisible: !this.state.alertVisible
        });
    }
      
    render() { 
        return (  
            <div>
                <Alert color="success" isOpen={this.state.alertVisible} toggle={this.toggle.bind(this)}>Información actualizada con exito</Alert>
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingTop: '10px' }}>
                    <Card bg="light" style={{ width: '50rem' }}>
                        <Card.Header>
                            <Card.Title>Actualizar mi informacion</Card.Title>
                        </Card.Header>
                        <form onSubmit={this.handleSubmit} className="p-2">
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                            Actualizar información
                            </button>
                            <div className="twocolscustom">
                            <div className="form-group p-2">
                                Nombre
                                <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                value={this.state.nombre}
                                onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group p-2">
                                Apellido
                                <input
                                type="text"
                                name="apellido"
                                className="form-control"
                                value={this.state.apellido}
                                onChange={this.handleInputChange}
                                placeholder="Apellido"
                                />
                            </div>
                            </div>
                            <div className="twocolscustom">
                            <div className="form-group p-2">
                                Nacionalidad
                                <CountryDropdown 
                                className="form-control mr-sm-2" 
                                name = "nacionalidad"
                                value={this.state.nacionalidad} 
                                onChange={(val) => this.selectCountry(val)}
                                />
                            </div>
                            </div>
                            <div className="twocolscustom">
                            <div className="form-group p-2">
                                Fecha de nacimiento
                                <input 
                                className="form-control mr-sm-2" 
                                type="date" 
                                name = "fecha_nacimiento"
                                defaultValue = {this.state.fecha_nacimiento}
                                onChange={this.handleInputChange}/>
                            </div>
                            </div>
                            <div className="form-group p-2">
                            Trabajo que ejerce
                            <input
                                type="text"
                                name="descripcion"
                                className="form-control"
                                value={this.state.descripcion}
                                onChange={this.handleInputChange}
                                placeholder="Descripción"
                                />
                            </div>
                            <div className="form-group p-2">
                            Lugar de trabajo
                            <input
                                type="text"
                                name="experiencia"
                                className="form-control"
                                value={this.state.experiencia}
                                onChange={this.handleInputChange}
                                placeholder="Experiencia"
                                />
                            </div>
                        </form>
                    </Card>
                </Container>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
  
  return {loginAccountInfo: state.loginAccountInfo};
};
 
export default connect(mapStateToProps, null)(CreacionUsuarios);


