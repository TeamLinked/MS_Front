import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


class EmpleoDetallado extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      empleoSeleccionado: 0
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ empleoSeleccionado: 1 });
    this.setState({ show: true });
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
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EmpleoDetallado;