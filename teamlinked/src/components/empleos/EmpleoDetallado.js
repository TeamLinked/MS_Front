import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

class EmpleoDetallado extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      show2: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    
    this.setState({ show: true });
  }

  handleClose2() {
    this.setState({ show2: false });
  }

  handleShow2() {
    this.setState({ show2: true });
  }

  postularEmpleo() {
    
    const url = "http://34.94.208.170:3051/graphql";
    const query = `
      mutation{
        inputPostulacion(body:{
          id_postulante:"`+ this.props.loginAccountInfo.id +`"
          id_empleo:`+ this.props.empleo.id +`
        }){
          id
          id_postulante
          id_empleo{
            id
            titulo
            descripcion
            fechaPublicacion
            fechaVencimiento
            id_ofertante
            categoria
          }
          fechaAplicacion
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
        this.setState({ show: false });//cerrar popup1
        this.setState({ show2: true });//abrir popup2
        this.forceUpdate();
      })
      .catch(console.error);
  }

  handleSubmit (e) {
    this.postularEmpleo();
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return (
      <div>
        <Card className="text-center" style={{ width: '16rem', height: '15rem' }}>
                  
          <Card.Body>
            <Card.Title >{this.props.empleo.titulo}</Card.Title>
            <Card.Text>
              - Publicado en: {this.props.empleo.fechaPublicacion} <br></br>
              - Vence en: {this.props.empleo.fechaVencimiento} 
            </Card.Text>
            
          </Card.Body>
          <Card.Footer >
            <Button variant="primary" onClick={this.handleShow}>Ver mas</Button>
            
          </Card.Footer>
        </Card>


        <Modal 
          show={this.state.show2} 
          onHide={this.handleClose2}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <text style={{fontWeight: "bold"}}>Te has postulado al empleo : {this.props.empleo.titulo}</text>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose2}>
              Volver
            </Button>
          </Modal.Footer>
        </Modal>
        
        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.empleo.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <text style={{fontWeight: "bold"}}>Descripcion del empleo:</text>
          <br></br><br></br>
          {this.props.empleo.descripcion}
          <br></br><br></br>
          <text style={{fontWeight: "bold"}}>Fecha de publicación: </text><text>{this.props.empleo.fechaPublicacion}</text>
          <br></br>
          <text style={{fontWeight: "bold"}}>Fecha de Vencimiento: </text><text>{this.props.empleo.fechaVencimiento}</text>
          <br></br>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSubmit}>
              Aplicar a este empleo
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
    );
    
  }
}


const mapStateToProps = (state) => {
  return {loginAccountInfo: state.loginAccountInfo};
};

export default connect(mapStateToProps, null)(EmpleoDetallado);