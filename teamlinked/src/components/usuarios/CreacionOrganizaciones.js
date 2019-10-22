import React, { Component } from 'react';
import {Container, Card} from 'react-bootstrap';

//Estilos
//import '../styles/Usuarios.css'; 



class CreacionOrganizaciones extends Component {
    
    constructor() {
        super();
        this.state = {
          nombre: '',
          descripcion: '',
          administrador: '',
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
        descripcion: '',
        administrador: '',
        previewimg: ''
    });
    }



    render() { 
        return (  
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingTop: '10px' }}>
                <Card bg="light" style={{ width: '50rem' }}>
                    <Card.Header>
                        <Card.Title>Crear Organizacion</Card.Title>
                    </Card.Header>
                    <form onSubmit={this.handleSubmit} className="p-2">
                    <img src={this.state.previewimg} className="img-thumbnail"/>
                    <input type="file" onChange={this.handlePreview}/>
                    <button type="submit" className="btn btn-primary">
                        Crear Organización
                        </button>
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
                        Descripción
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
                        Administrador
                        <input
                        type="text"
                        name="administrador"
                        className="form-control"
                        value={this.state.administrador}
                        onChange={this.handleInputChange}
                        placeholder="Administrador"
                        />
                    </div>
                    </form>
                
                </Card>
            </Container>
        );
    }
}
 
export default CreacionOrganizaciones;