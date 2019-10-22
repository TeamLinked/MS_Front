//Dependencias
import React, { Component } from 'react';
import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';

//Estilos
//import '../styles/Empleos.css'; 
//https://reactjs.org/docs/forms.html

class CreacionEmpleos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingTop: '10px' }}>   
                <Card bg="light" style={{ width: '50rem' }}>
                    <Card.Header>
                        <Card.Title>Nueva Oferta de Empleo</Card.Title>
                    </Card.Header>
                    <Card.Body>                        
                        <Card.Text>
                            <Form>                                
                                <Form.Group controlId="tituloEmpleo">
                                    <Form.Label>Título</Form.Label>
                                    <Form.Control type="string" placeholder="ingrese el titulo del empleo" />
                                </Form.Group>

                                <Form.Group controlId="descripcionEmpleo">
                                    <Form.Label>Descripcion del empleo</Form.Label>
                                    <Form.Control as="textarea" rows="8" placeholder="Especifique de que se trata el empleo" />
                                </Form.Group>

                                <Form.Group controlId="categoriaEmpleo">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control as="select">
                                        <option value='Diseño' >Diseño</option>
                                        <option value='Ingenieria'>Ingeniería</option>
                                        <option value='Medicina'>Medicina</option>
                                        <option value='Derecho'>Derecho</option>
                                        <option value='Ciencias'>Ciencias</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="FechaVencimientoEmpleo">
                                    <Form.Label>Fecha de Vencimiento</Form.Label>
                                    <Form.Control type="string" placeholder="ingrese la fecha Ej: AAAA-MM-DD" />
                                </Form.Group>
                                <br/>
                                <Button variant="primary" type="submit">
                                    Crear Empleo
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>              
            </Container>
        );
    }
}
 
export default CreacionEmpleos;