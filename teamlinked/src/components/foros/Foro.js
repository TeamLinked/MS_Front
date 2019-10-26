import React, { Component } from 'react'
import { Card,Row } from 'react-bootstrap'



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
      <Card>
      <Card.Img variant="top" src={this.props.foro.imagen} />
      <Card.Body>
        <Card.Text>
        <Card.Title>{this.props.foro.titulo}</Card.Title>
        {this.props.foro.contenido}
        
        </Card.Text>
      </Card.Body>
          <Card.Footer>
            {console.log(this.props.foro.fechaCreacion)}
      <small className="text-muted">{this.props.foro.fechaCreacion} </small>
    </Card.Footer>
      
    </Card>




    )
  }
}

export default Foro