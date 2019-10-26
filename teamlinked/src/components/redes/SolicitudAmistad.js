import React from "react";
import "./App.css";

class SolicitudAmistad extends React.Component {
  render() {
    return (
      <div className="App" style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">{this.props.persona.nombre}</h3>
            <p className="card-text">Quiere ser tu amigo</p>
            <button
              type="button"
              className="btn btn-success col-md-6"
              onClick={() => this.props.aceptar()}
            >
              Aceptar
            </button>
            <button
              type="button"
              className="btn btn-danger col-md-6"
              onClick={() => this.props.rechazar()}
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SolicitudAmistad;
