import React, { Component } from 'react';
import {Container, Card} from 'react-bootstrap';
import { connect } from 'react-redux';

//Estilos
//import '../styles/Usuarios.css'; 

class CreacionUsuarios extends Component {
    constructor() {
        super();
        this.state = {
          nombre: '',
          apellido: '',
          correo: '',
          nacionalidad: '',
          contrasenaact: '',
          contrasenanew: '',
          contrasenaconfirm: '',
          descripcion: '',
          experiencia: '',
          habilidades: '',
          previewimg: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
        handleInputChange(e) {
            const {value, name} = e.target;
            this.setState({
            [name]: value
            });
        }
    
      handleSubmit(e) {
        
        console.log(JSON.stringify(this.state));
        this.query();
        e.preventDefault();
      }
      
      query(){
          const Uid = this.props.loginAccountInfo.id;
          let query = `
            mutation{
              putUsuario(id: ${Uid},
              body: {
            `;
            if(this.state.nombre != ''){
                query = query +
                    `
                    nombre: "`+ this.state.nombre +`"`
            }
            if(this.state.apellido != ''){
                   query = query +
                   `
                    apellido: "`+ this.state.apellido +`"`
            }
            if(this.state.correo != ''){
                query = query +
                    `
                    email: "`+ this.state.correo +`"`
            }
            if(this.state.nacionalidad != ''){
                query = query +
                    `
                    nacionalidad: "`+ this.state.nacionalidad +`"`
            }
            
            query = query +`
            }){
              }
            }
            `
            console.log(query);
            const url = "http://34.94.208.170:3051/graphql";
 
            let opts = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" ,"Access-Control-Allow-Origin": "*"},
                    body: JSON.stringify({ query })
            };
            fetch(url, opts)
                    .then(res => res.json())
                    .catch(e => {
                        console.log(e);
                    });
      }
      
    render() { 
        return (  
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
                            placeholder="Nombre"
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
                            Correo
                            <input
                            type="text"
                            name="correo"
                            className="form-control"
                            value={this.state.correo}
                            onChange={this.handleInputChange}
                            placeholder="Correo"
                            />
                        </div>
                        <div className="form-group p-2">
                            Nacionalidad
                            <input
                            type="text"
                            name="nacionalidad"
                            className="form-control"
                            value={this.state.nacionalidad}
                            onChange={this.handleInputChange}
                            placeholder="nacionalidad"
                            />
                        </div>
                        </div>
                        Cambio de contraseña
                        <div className="twocolscustom">
                        <div className="form-group p-2">
                            Contraseña Actual
                            <input
                            type="password"
                            name="contrasenaact"
                            className="form-control"
                            value={this.state.contrasenaact}
                            onChange={this.handleInputChange}
                            placeholder="Contraseña Actual"
                            />
                        </div>
                        <div className="form-group p-2">
                            Nueva Contraseña
                            <input
                            type="password"
                            name="contrasenanew"
                            className="form-control"
                            value={this.state.contrasenanew}
                            onChange={this.handleInputChange}
                            placeholder="Nueva Contraseña"
                            />
                        </div>
                        </div>
                        <div className="twocolscustom">
                        <div>

                        </div>
                        <div className="form-group p-2">
                            Confirmar Contraseña
                            <input
                            type="password"
                            name="contrasenaconfirm"
                            className="form-control"
                            value={this.state.contrasenaconfirm}
                            onChange={this.handleInputChange}
                            placeholder="Confirmar Contraseña"
                            />
                        </div>
                        </div>
                        <div className="form-group p-2">
                        Sobre Mi
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
                        Experiencia
                        <input
                            type="text"
                            name="experiencia"
                            className="form-control"
                            value={this.state.experiencia}
                            onChange={this.handleInputChange}
                            placeholder="Experiencia"
                            />
                        </div>
                        <div className="form-group p-2">
                        Habilidades
                        <input
                            type="text"
                            name="habilidades"
                            className="form-control"
                            value={this.state.habilidades}
                            onChange={this.handleInputChange}
                            placeholder="Habilidades"
                            />
                        </div>

                    </form>
                </Card>
            </Container>
        );
    }
}
 
const mapStateToProps = (state) => {
  
  return {loginAccountInfo: state.loginAccountInfo};
};
 
export default connect(mapStateToProps, null)(CreacionUsuarios);


