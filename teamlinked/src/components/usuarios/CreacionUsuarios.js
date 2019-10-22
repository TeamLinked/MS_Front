import React, { Component } from 'react';
import {Container, Card} from 'react-bootstrap';

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
        this.handlePreview = this.handlePreview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
        handleInputChange(e) {
            const {value, name} = e.target;
            this.setState({
            [name]: value
            });
      }
    
      handlePreview = (e) => {
        e.preventDefault();

        let file = e.target.files[0];
        let reader = new FileReader();

        if (e.target.files.length === 0) {
        return;
        }

        reader.onloadend = (e) => {
        this.setState({
            previewimg: [reader.result]
        });
        }

        reader.readAsDataURL(file);
      }
    
      handleSubmit(e) {
        e.preventDefault();
        //this.props.onAddTodo(this.state); para enviar info de esta pagina a una pagina madre
        this.setState({
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
                    <img src={this.state.previewimg} className="img-thumbnail"/>
                    <input type="file" onChange={this.handlePreview}/>
                    <button type="submit" className="btn btn-primary">
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
                            name="descripcion"
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
                            type="text"
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
                            type="text"
                            name="descripcion"
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
                            type="text"
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
 
export default CreacionUsuarios;


