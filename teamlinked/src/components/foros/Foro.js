import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import './index.css'



class Foro extends Component {
  constructor(props) {
    super(props);

  }

  pic(picture) {
    console.log("IMAGEN", picture)
    // if (picture == null) {
    if (true) {
      return "https://media.sproutsocial.com/uploads/2017/08/Facebook-Shared-Post-Video.png";
    } else {
      return picture;
    }

  };

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

        <Card.Img class="center-cropped" variant="top" src={this.pic(this.props.foro.imagen)} />
        {console.log(this.props.foro.imagen)}
        <Card.Body>
          <Card.Text>
            <Card.Title>{this.props.foro.titulo}</Card.Title>
            {this.props.foro.contenido}
          </Card.Text>
          <div className="update ml-auto mr-auto" align="center">
            <Button
              className="btn-round"
              color="primary"
              type="submit"
            >
              Participar
                        </Button>
          </div>
        </Card.Body>
        <Card.Footer>
          {console.log(this.props.foro.fechaCreacion)}
          <small className="text-muted">{this.props.foro.fecha_creacion} </small>
        </Card.Footer>
      </Card>
    )
  }
}

export default Foro