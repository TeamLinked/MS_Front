import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

import './index.css'

class Foro extends Component {
  constructor(props) {
    super(props);
  }

  pic(picture) {
    if (picture === "") {
      return "https://media.sproutsocial.com/uploads/2017/08/Facebook-Shared-Post-Video.png";
    } 
    else {
      return picture;
    }
  };

  render() {
    return (
      <Card style={{ "padding": "0 60px", "maxWidth": 1200, "margin": "10px auto" }}>
        <Card.Img class="center-cropped" variant="top" src={this.pic(this.props.foro.imagen)} />
			    {console.log(this.props.foro.imagen)}
        <Card.Body>
          <Card.Text>
          <Card.Title>{this.props.foro.titulo}</Card.Title>
				    {this.props.foro.contenido}
          </Card.Text>
          <div className="update ml-auto mr-auto" align="center">
            <Button className="btn-round" color="primary" type="submit">
              Participar
            </Button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{this.props.foro.fecha_creacion} </small>
        </Card.Footer>
      </Card>
    )
  }
}

export default Foro