import React from "react";
class Amigo extends React.Component {
  render() {
    return (
      <div className="media text-muted pt-3">
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">
              {this.props.persona.nombre}{" "}
            </strong>
          </div>
          <span className="d-block">{this.props.persona.email}</span>
        </div>
      </div>
    );
  }
}

export default Amigo;
