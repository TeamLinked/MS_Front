//Dependencias
import React, { Component } from 'react';
import {Form, Card, Container, Button, Col, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
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
            <Container style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "10px auto" }} > 

                <div style={{ "maxWidth": 1050, "margin": "10px auto","height":"50px", "opacity":0.8}}>
                    <Row className="justify-content-end">
                        <LinkContainer to="/empleos"  style={{ "margin": "5px"}} >
                        <Button>Buscar Empleo</Button>
                        </LinkContainer>
                        <Button style={{ "margin": "5px"}}>Mis postulaciones</Button>
                    </Row>
                    <Row><br></br><br></br></Row>
                    <Row className="justify-content-center">
                    
                    <Card bg="light" style={{ width: '67rem' }}>
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
                                        <option value='Administracion de empresas' >Administracion de empresas</option>
                                        <option value='Administrativos y secretariado'>Administrativos y secretariado</option>
                                        <option value='Atencion al cliente'>Atencion al cliente</option>
                                        <option value='Banca y seguros'>Banca y seguros</option>
                                        <option value='Calidad, Medio Ambiente'>Calidad, Medio Ambiente</option>
                                        <option value='Comercial, Ventas' >Comercial, Ventas</option>
                                        <option value='Compras, Logistica y Transporte'>Compras, Logistica y Transporte</option>
                                        <option value='Construccion e inmobiliaria'>Construccion e inmobiliaria</option>
                                        <option value='Educacion, formacion'>Educacion, formacion</option>
                                        <option value='Hoteleria y Turismo'>Hoteleria y Turismo</option>
                                        <option value='Ingenieria y Produccion' >Ingenieria y Produccion</option>
                                        <option value='Internet'>Internet</option>
                                        <option value='Medios, Editorial y Artes Graficas'>Medios, Editorial y Artes Graficas</option>
                                        <option value='Oficios Varios'>Oficios Varios</option>
                                        <option value='Recursos Humanos'>Recursos Humanos</option>
                                        <option value='Sanidad Salud y Servicios Sociales'>Sanidad Salud y Servicios Sociales</option>
                                        <option value='Tecnologia e Informatica'>Tecnologia e Informatica</option>
                                        <option value='Telecomunicaciones'>Telecomunicaciones</option>
                                        
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
                    </Row>
                </div>

                     
            </Container>
        );
    }
}
 
export default CreacionEmpleos;