import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


class Foro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <div className="card bg-dark text-black mt-2">
      //     <img src={this.props.foro.imagen} className="card-img" alt="..."/>
      //     <div className="card-img-overlay">
      //       <h1 className="card-title">{this.props.foro.titulo}</h1>
      //       <p className="card-text">{this.props.foro.contenido}</p>
      //       <p className="card-text">{this.props.foro.fechaCreacion}</p>
      //     </div> 
      // </div>
      <Card className="bg-dark text-black mt-3">
        <Card.Img src={this.props.foro.imagen} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{this.props.foro.titulo}</Card.Title>
          <Card.Text>{this.props.foro.contenido}</Card.Text>
          <Card.Text>{this.props.foro.fecha_creacion}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    )
  }
}

export default Foro
