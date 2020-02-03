//Dependencias
import React, { Component } from 'react';
import { Form, Card, Container, Row, Button, Modal} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';


//Estilos
//import '../styles/Empleos.css'; 
//https://reactjs.org/docs/forms.html

class CreacionEmpleos extends Component {
  constructor(props, context) {
    super(props,context);
    this.state = {
      tituloEmpleo: '',
      descripcionEmpleo: '',
      categoriaEmpleo:'Administracion de empresas', 
      fechaVencimientoEmpleo:'',
      show:false
    }
    this.handleTitulo = this.handleTitulo.bind(this);
    this.handleDescripcion = this.handleDescripcion.bind(this);
    this.handleCategoria = this.handleCategoria.bind(this);    
    this.handleFechaVencimiento = this.handleFechaVencimiento.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
		this.setState({ show: false });
	}

	

  handleTitulo(e) {
    this.setState({ tituloEmpleo: e.target.value });
    console.log(this.state.tituloEmpleo)
    e.preventDefault();
    e.stopPropagation();
  }

  handleDescripcion(e) {
    this.setState({ descripcionEmpleo: e.target.value });
    console.log(this.state.descripcionEmpleo)
    e.preventDefault();
    e.stopPropagation();
  }

  handleCategoria(e) {
    this.setState({ categoriaEmpleo: e.target.value });
    console.log(this.state.categoriaEmpleo)
    e.preventDefault();
    e.stopPropagation();
  }

  handleFechaVencimiento(e) {
    this.setState({fechaVencimientoEmpleo: e.target.value});
    console.log(this.state.fechaVencimientoEmpleo)
    e.preventDefault();
    e.stopPropagation();
  }
  
  crearEmpleo() {
    
    const url = "http://34.94.208.170:3051/graphql";
    const query = `
      mutation{
        inputEmpleo(body:{
          titulo:"`+ this.state.tituloEmpleo +`"
          descripcion:"`+ this.state.descripcionEmpleo +`"
          fechaVencimiento:"`+ this.state.fechaVencimientoEmpleo +`"
          id_ofertante:"`+this.props.loginAccountInfo.id+`"
          categoria:"`+ this.state.categoriaEmpleo +`"
        }){
          id
          titulo
          descripcion
          fechaPublicacion
          fechaVencimiento
          id_ofertante
          categoria
        }
      }
    `;


    console.log(query);
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ query })
    };

    fetch(url, opts)
      .then(res => res.json())
      .then(e => {
        console.log('RTA',e.data);
        this.setState({ categorias: e.data.getCategorias })
        //console.log('RTA2',this.state.categorias);
        if (e.data.inputEmpleo !== null){
          this.setState({ show: true });
        }
        this.forceUpdate();
      })
      .catch(console.error);
  }

  handleSubmit (e) {
    this.crearEmpleo();
    console.log(this.state.tituloEmpleo)
    console.log(this.state.descripcionEmpleo)
    console.log(this.state.fechaVencimientoEmpleo)
    console.log(this.state.categoriaEmpleo)
    e.preventDefault();
    e.stopPropagation();
  }



  render() {
    
    return (
      <Container style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "10px auto" }} >

        <div style={{ "maxWidth": 1050, "margin": "10px auto", "height": "50px", "opacity": 0.8 }}>
          <Row className="justify-content-end">
            <LinkContainer to="/empleos" style={{ "margin": "5px" }} >
              <Button>Buscar Empleo</Button>
            </LinkContainer>
            <Button style={{ "margin": "5px" }}>Mis postulaciones</Button>
          </Row>
          <Row><br></br><br></br></Row>
          <Row className="justify-content-center">

            <Card bg="light" style={{ width: '67rem' }}>
              <Card.Header>
                <Card.Title>Nueva Oferta de Empleo</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form noValidate onSubmit = {this.handleSubmit}>
                    <Form.Group controlId="formTituloEmpleo">
                      <Form.Label>Título</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="ingrese el titulo del empleo"
                        value = {this.state.tituloEmpleo} 
                        onChange = {this.handleTitulo}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formDescripcionEmpleo">
                      <Form.Label>Descripcion del empleo</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows="5" 
                        placeholder="Especifique de que se trata el empleo" 
                        value = {this.setState.descripcionEmpleo}
                        onChange = {this.handleDescripcion}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formCategoriaEmpleo">
                      <Form.Label>Categoria</Form.Label>
                      <Form.Control 
                        as="select" 
                        onChange = {this.handleCategoria}
                        required
                      >
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

                    <Form.Group controlId="formFechaVencimientoEmpleo">
                      <Form.Label>Fecha de Vencimiento</Form.Label>
                      <Form.Control 
                        type="date" 
                        placeholder="ingrese la fecha Ej: AAAA-MM-DD"
                        value = {this.state.fechaVencimientoEmpleo}
                        onChange = {this.handleFechaVencimiento}
                        required
                        />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Crear Empleo
                    </Button>

                    <Modal 
                      show={this.state.show} 
                      onHide={this.handleClose} 
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>El nuevo empleo ha sido creado</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{this.state.tituloEmpleo}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                          Cerrar
                        </Button>
                        <LinkContainer to="/empleos" style={{ "margin": "5px" }} >
                          <Button variant="primary" onClick={this.handleClose}>Ir a empleos</Button>
                        </LinkContainer>
                      </Modal.Footer>
                    </Modal>
                    
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

const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, null)(CreacionEmpleos);
