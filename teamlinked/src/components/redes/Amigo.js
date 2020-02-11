import React from "react";
import {Button} from 'react-bootstrap';

import '../../styles/Redes.css' 

class Amigo extends React.Component {
  handleClick = e => {
    this.props.handleClick(this.props.persona.id);
  }

  render() {
    return (
      <div className="media text-muted pt-3">
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">
              {this.props.persona.nombre}{" "}{this.props.persona.apellido}
            </strong>
            <Button type="button" className="btn-personalized btn btn-xs" onClick={this.handleClick}>{this.props.btnlabel}</Button>
          </div>
          <span className="d-block">{this.props.persona.email}</span>
        </div>
      </div>
    );
  }
}

export default Amigo;
